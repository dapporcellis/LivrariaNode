const uri = "mongodb://localhost:27017/livraria"
const mongoose = require("mongoose")

mongoose.connect(uri)

module.exports =  mongoose