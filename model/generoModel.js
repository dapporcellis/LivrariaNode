var Mongoose = require('./conexao')

var Genero = new Mongoose.Schema({
    nome: { type: String, required: true, trim: true }
});

module.exports = Mongoose.model('Genero', Genero);