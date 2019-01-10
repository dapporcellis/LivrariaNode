var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/userModel');
var bcrypt = require('bcryptjs')

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
  usernameField: 'txtEmail',
  passwordField: 'txtSenha'
},
  function (username, password, done) {
    //console.log(username)
    User.findOne({ email: username }, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Usuário não existente.' });
      }
      bcrypt.compare(password, user.senha, function (err, isMatch) {
        if (err) return done(err);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Senha inválida' });
        }
      });
    });
  }));

module.exports = passport