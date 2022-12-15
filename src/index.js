const express = require("express")
const mongoose = require("mongoose")
const List = require("../Models/list.model")
const cors = require("cors")
const connect = require("../Connect/Connect")
const req = require("express/lib/request")
const PORT = process.env.PORT || 8000
mongoose.set('strictQuery', true)



const app = express()

app.use(express.json())

app.use(cors())

app.get("/",async(req,res)=>{
    let Dateandtimestamp=new Date().valueOf()
    console.log(Dateandtimestamp)
    res.send({Dateandtimestamp:Dateandtimestamp})
})


//  For List data ******************************************

app.get("/data",async(req,res)=>{
    try {
        const data=await List.find()
        res.send({data:data})
    } catch (error) {
        res.status(501).send(error.message)
    }
})
app.get("/book",async(req,res)=>{
    try {
        const data=await List.find()
        res.send({data:data})
    } catch (error) {
        res.status(501).send(error.message)
    }
})


app.post("/data",async(req,res)=>{
   
    let Dateandtimestamp=new Date().valueOf()
    let list = {...req.body,Dateandtimestamp}
    console.log(list)
    try {
       const data = await List.create(list)
       res.send({message:"List added successfully",data:data})
    } catch (error) {
        res.status(501).send(error.message)
    }
      
    
    
})
app.post("/book/:id",async(req,res)=>{
    let id=req.params.id
  try {
      id=id.toString()
    let data=await List.findByIdAndDelete(id)
    if(!data){
        res.status(401).send("data not found")
    }
    else{
        res.send("List posted Successfully")
    }
    

  } catch (error) {
    res.status(401).send(error.message)
  }

   
})

app.delete("/data/:id",async(req,res)=>{
    let id=req.params.id
  try {
      id=id.toString()
    let data=await List.findByIdAndDelete(id)
    if(!data){
        res.status(401).send("data not found")
    }
    else{
        res.send("List Deleted Successfully")
    }
    

  } catch (error) {
    res.status(401).send(error.message)
  }

   
})





app.listen(PORT, async () => {
    await connect()
    console.log(`Database Connected and app listening on port ${PORT}`)
})