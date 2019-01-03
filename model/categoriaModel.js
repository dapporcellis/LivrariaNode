var Mongoose = require('./conexao')

var Categoria = new Mongoose.Schema({
    nome: { type: String, required: true, trim: true }
});

module.exports = Mongoose.model('Categoria', Categoria);