const uri = "mongodb://localhost:27017/livraria"
const mongoose = require("mongoose")

mongoose.connect(uri, { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);

module.exports =  mongoose