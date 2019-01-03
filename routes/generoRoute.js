var express = require('express');
var router = express.Router();
var generoctr = require('../controle/generoCtr')

// define a rota para listar as generos cadastradas
router.get('/', generoctr.index);

//define a rota para listar com filtro
router.post('/', generoctr.filtro);

// define a rota abrir add
router.get('/add', generoctr.abrirAdd);

// define a rota salvar a adição
router.post('/add', generoctr.salvarAdd);

// define a rota para abrir o editar as categogias
router.get('/edit/:id', generoctr.abrirEdit);

// define a rota para salvar a edição
router.post('/edit/:id', generoctr.salvarEdit);

// define a rota para deletar
router.get('/delete/:id', generoctr.deletar);


module.exports = router;