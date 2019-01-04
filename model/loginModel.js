var Mongoose = require('./conexao')

var Login = new Mongoose.Schema({
    nome: { type: String, required: true, trim: true },
    email: {type: String, required: true, trim: true},
    senha: {type: String, required: true, trim: true}
});

module.exports = Mongoose.model('Login', Login);