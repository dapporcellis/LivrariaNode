var User = require('../model/userModel');
var passport = require('../config/passport')
var bcrypt = require('bcryptjs');

exports.index = function (req, res) {
  if(req.query.fail)
  res.render("login/login.ejs",{ 'msg':"Voce não está logado"})
  else if(req.query.senha)
  res.render("login/login.ejs",{ 'msg':"Email ou senha incorretos"})
  else
  res.render("login/login.ejs")
};

exports.logar = passport.authenticate('local',{successRedirect: '/genero/', failureRedirect: '/?senha=erro'})

exports.abrirRegistra = function(req,res){
  res.render("login/registra.ejs")
};

exports.sair = function(req,res){
    req.logout();
    res.redirect('/?fail=1');
};

exports.registrar = function(req,res){
  console.log(req.file)
  var foto = req.file.filename;
  var nome = req.body.txtNome;
  var email = req.body.txtEmail;
  var password = req.body.txtSenha;
  var newUser = new User({
    nome: nome,
    email: email,
    senha: password,
    foto: foto
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