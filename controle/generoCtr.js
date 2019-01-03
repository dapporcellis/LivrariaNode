var Genero = require('../model/generoModel');

exports.index = function(req, res) {
            if(req.query.ok){
              var msg = "Deletado com sucesso!"
            }
            Genero.find({}).lean().exec(
              function (e, docs) {
                 res.render('genero/index.ejs', { "Generos": docs, 'msg': msg });
            });
        };

        exports.filtro = function(req,res){
          console.log(req.body.txtFiltro)
          Genero.find({'nome': new RegExp(req.body.txtFiltro, 'i')}).lean().exec(
            function (e, docs) {
               res.render('genero/index.ejs', { "Generos": docs });
          });
        };

exports.abrirAdd = function(req, res) {
            res.render("genero/add.ejs")
        };
        
        exports.salvarAdd = function(req, res) {
            let genero = new Genero({
              nome: req.body.txtGenero
            })
            genero.save(function(err){
              if(err){
                res.render('genero/add.ejs',{"msg":err})
              } else{
                res.render('genero/add.ejs',{"msg":'Adicionado com sucesso'})
              }      
            })  
          };
        exports.abrirEdit = function(req, res) {
            Genero.findById(req.params.id).lean().exec(function(err,genero){
              res.render("genero/edit.ejs",{'genero':genero})
            })
          };

        exports.salvarEdit = function(req, res) {
            Genero.findByIdAndUpdate(req.params.id,{$set: {nome: req.body.txtGenero}},{ new: true },function(err,genero){
              res.render("genero/edit.ejs",{'genero':genero, 'msg':'Alterado com sucesso!'})
            })
        };

        exports.deletar = function(req, res) {
            Genero.findByIdAndDelete(req.params.id,function(){
              res.locals.msg = "Excluído com sucesso!"
              res.redirect('/genero/?ok=true')    
              //Genero.find({}).lean().exec(
                //function (e, docs) {
                   //res.render('genero/index.ejs', { "Generos": docs, 'msg': "Deletado com sucesso!" });
              //}); 
            })
        };
