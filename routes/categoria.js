var express = require('express');
var router = express.Router();
var Categoria = require('../model/categoria');


// define a rota para listar as categorias cadastradas
router.get('/', function(req, res) {
  Categoria.find({}).lean().exec(
    function (e, docs) {
       res.render('categoria/index.ejs', { "Categorias": docs });
  });
});

// define a rota abrir add
router.get('/add', function(req, res) {
  res.render("categoria/add.ejs")
});

// define a rota salvar a adição
router.post('/add', function(req, res) {
  let categoria = new Categoria({
    nome: req.body.txtGenero
  })
  categoria.save(function(err){
    if(err){
      res.render('categoria/add.ejs',{"msg":err})
    } else{
      res.render('categoria/add.ejs',{"msg":'Adicionado com sucesso'})
    }      
  })  
});

// define a rota para abrir o editar as categogias
router.get('/edit/:id', function(req, res) {
  Categoria.findById(req.params.id).lean().exec(function(err,categoria){
    res.render("categoria/edit.ejs",{'categoria':categoria})
  })
});

// define a rota para salvar a edição
router.post('/edit/:id', function(req, res) {
  
  
});

// define a rota para deletar
router.get('/delete/:id', function(req, res) {
  Categoria.findById(req.params.id).remove(function(err){
    if(err){
      var msg = err
    } else{
      var msg = "Removido com sucesso!"
    }
    Categoria.find({}).lean().exec(
      function (e, docs) {
         res.render('/index.ejs', { "Categorias": docs, 'msg' : msg });
    });   
  })  
});

module.exports = router;