var express = require('express');
var router = express.Router();
var userCtr = require('../controle/userCtr')

// define a rota abrir janela de login
router.get('/', userCtr.index);

//define a rota logar
router.post('/login', userCtr.logar);

// define a rota abrir registrar
router.get('/registra', userCtr.abrirRegistra);

// define a rota abrir registrar
router.post('/registra', userCtr.registrar);

// define a rota registrar
router.get('/logout', userCtr.sair);


module.exports = router;