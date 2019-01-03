var express = require('express');
var router = express.Router();
var categoriacontrole = require('../controle/categoriaCtr')

// define a rota para listar as categorias cadastradas
router.get('/', categoriacontrole.index);

// define a rota abrir add
router.get('/add', categoriacontrole.abrirAdd);

// define a rota salvar a adição
router.post('/add', categoriacontrole.salvarAdd);

// define a rota para abrir o editar as categogias
router.get('/edit/:id', categoriacontrole.abrirEdit);

// define a rota para salvar a edição
router.post('/edit/:id', categoriacontrole.salvarEdit);

// define a rota para deletar
router.get('/delete/:id', categoriacontrole.deletar);


module.exports = router;