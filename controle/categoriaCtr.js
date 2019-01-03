var Categoria = require('../model/categoriaModel');

exports.index = function(req, res) {
            if(req.query.ok){
              var msg = "Deletado com sucesso!"
            }
            Categoria.find({}).lean().exec(
              function (e, docs) {
                 res.render('categoria/index.ejs', { "Categorias": docs, 'msg': msg });
            });
        };

exports.abrirAdd = function(req, res) {
            res.render("categoria/add.ejs")
        };
        
        exports.salvarAdd = function(req, res) {
            let categoria = new Categoria({
              nome: req.body.txtCategoria
            })
            categoria.save(function(err){
              if(err){
                res.render('categoria/add.ejs',{"msg":err})
              } else{
                res.render('categoria/add.ejs',{"msg":'Adicionado com sucesso'})
              }      
            })  
          };
        exports.abrirEdit = function(req, res) {
            Categoria.findById(req.params.id).lean().exec(function(err,categoria){
              res.render("categoria/edit.ejs",{'categoria':categoria})
            })
          };

        exports.salvarEdit = function(req, res) {
            Categoria.findByIdAndUpdate(req.params.id,{$set: {nome: req.body.txtCategoria}},{ new: true },function(err,categoria){
              res.render("categoria/edit.ejs",{'categoria':categoria, 'msg':'Alterado com sucesso!'})
            })
        };

        exports.deletar = function(req, res) {
            Categoria.findByIdAndDelete(req.params.id,function(){
              res.locals.msg = "Excluído com sucesso!"
              res.redirect('/categoria/?ok=true')    
              //Categoria.find({}).lean().exec(
                //function (e, docs) {
                   //res.render('categoria/index.ejs', { "Categorias": docs, 'msg': "Deletado com sucesso!" });
              //}); 
            })
        };
