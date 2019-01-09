var express = require('express');
var router = express.Router();
var generoctr = require('../controle/generoCtr')

function authenticationMiddleware() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/?fail=true')
  }
}

// define a rota para listar as generos cadastradas
router.get('/', authenticationMiddleware(), generoctr.index);

//define a rota para listar com filtro
router.post('/', authenticationMiddleware(), generoctr.filtro);

// define a rota abrir add
router.get('/add', authenticationMiddleware(), generoctr.abrirAdd);

// define a rota salvar a adição
router.post('/add', authenticationMiddleware(), generoctr.salvarAdd);

// define a rota para abrir o editar as categogias
router.get('/edit/:id', authenticationMiddleware(), generoctr.abrirEdit);

// define a rota para salvar a edição
router.post('/edit/:id', authenticationMiddleware(), generoctr.salvarEdit);

// define a rota para deletar
router.get('/delete/:id', authenticationMiddleware(), generoctr.deletar);

module.exports = router;