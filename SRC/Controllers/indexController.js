const db = require ("../database/models/index")




module.exports ={
    index: function(req,res){
        db.Notas.findAll()
        .then(function(notas) {
            return res.render('index', { notas: notas})
        })
    } ,
    crear: function (req,res){
      db.Notas.create({
        titulo: req.body.titulo,
        texto: req.body.texto,
      })
      res.redirect ('/')
      },
      detalle: (req, res)=>{
        console.log(req.params.id)
        console.log ('te estoy viendo')
        
        db.Notas.findByPk(req.params.id)
          .then((postit)=>{
            res.render('detail', {postit:postit })
      })
    },
    update: (req, res)=>{
      console.log(req.params.id)
      
      console.log ('llego hasta aca')
      db.Notas.update({
              titulo: req.body.titulo,
              texto: req.body.texto,
          },{
          where:{
                  id: req.params.id  
              }
          }    
      ).then((nota)=>{
          res.redirect("/");
      })
      .catch(error=>{
          res.send(error);
      });
  },
      //detalle: function (req,res){
      //db.Notas.findByPk(req.params.id)
      //.then(function(mejora){
        //  res.render ("detail", {mejora})
     // })
     //} ,
    // modificar: function (req,res){
     // db.Notas.findByPk(req.params.id)
      //.then(function(update){
      //res.render ("detail", {update: update})
    // })
   // } , 
   borrar: (req, res)=>{
     console.log("borrar")
    db.Notas.destroy({
      where:{ 
        id: req.params.id
      }
    }) 
      res.redirect('/');
    
  },
  
}
   
     
      
