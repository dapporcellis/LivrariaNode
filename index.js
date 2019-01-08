const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
var genero = require("./routes/generoRoute")
var path = require('path');

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,function(){
    console.log("Servidor funcionando!")
})

app.use('/genero/',genero)
