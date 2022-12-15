const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://sunil:sunil@cluster0.g6orjd8.mongodb.net/raj?retryWrites=true&w=majority")
    
}
module.exports = connect