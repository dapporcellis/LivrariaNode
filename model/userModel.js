var Mongoose = require('./conexao')

var UserSchema = Mongoose.Schema({
	senha: {
		type: String
	},
	email: {
		type: String
	},
	nome: {
		type: String
	}
});

module.exports = Mongoose.model('User', UserSchema);

