var User = require('../model/userModel');
var passport = require('../config/passport')
var bcrypt = require('bcryptjs');

exports.index = function (req, res) {
  res.render("login/login.ejs")
};

exports.logar = function (req, res){
  //console.log(req.body.txtEmail)
  passport.authenticate('local',{successRedirect: '/genero/', failureRedirect: '/'})
};

exports.abrirRegistra = function(req,res){
  res.render("login/registra.ejs")
};

exports.sair = function(req,res){

};

exports.registrar = function(req,res){
  var name = req.body.txtNome;
  var email = req.body.txtEmail;
  var password = req.body.txtSenha;
  var newUser = new User({
    nome: name,
    email: email,
    senha: password
  });

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.senha, salt, function(err, hash) {
       newUser.senha = hash;
       newUser.save(function (err) {
        if (err) {
          res.render('login/registra.ejs', { "msg": err })
        } else {
          res.render('login/registra.ejs', { "msg": 'Adicionado com sucesso' })
        }
      });
    });
  });

};