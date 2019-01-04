var express = require('express');
var router = express.Router();
var loginctr = require('../controle/loginCtr')

// define a rota para listar as generos cadastradas
router.get('/', loginctr.abrirTela);

module.exports = router;