const express =  require('express')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const app = express()
var genero = require("./routes/generoRoute")
var logar = require('./routes/userRoute')
var path = require('path');
var passport = require('passport')
var session = require('express-session');

app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(session({ 
    secret:'secret',
    saveUninitialized: true,
    resave: true 
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000,function(){
    console.log("Servidor funcionando!")
})

app.use('/genero/',genero)
app.use('/',logar)

