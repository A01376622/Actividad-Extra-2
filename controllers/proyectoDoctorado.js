const path = require("path");
const ProyectoDoctorado = require("../utils/database").models.ProyectoDoctorado;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
// exports.getAltaProyectoDoctorado = (req,res)=>{
//     //res.send('<h1>Formulario de ProyectoDoctorado</h1>')
//     res.sendFile(path.join(__dirname,'..','views','formulario.html'));
// }

//C
exports.postAgregarProyectoDoctorado = (req,res)=>{
    console.log(req.body)
    //INSERT INTO ProyectoDoctorado VALUES ()
    ProyectoDoctorado.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

//R
exports.getProyectoDoctorados = (req,res)=>{
    //SELECT * from ProyectoDoctorado;
    ProyectoDoctorado.findAll()
        .then(proyectos=>{
            console.log("Proyecto de Doctorados",proyectos);
            res.send(proyectos);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

//D
exports.postEliminarProyectoDoctorado=(req,res)=>{
    //DELETE FROM ProyectoDoctorado WHERE id=
    console.log(req.body)
    ProyectoDoctorado.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("ProyectoDoctorado eliminado")
        res.send("ProyectoDoctorado eliminado")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

//U
exports.postActualizarProyectoDoctorado=(req,res)=>{
    //UPDATE ProyectoDoctorado SET WHERE id=
    console.log(req.body)
    ProyectoDoctorado.update({
        area: req.body.area,
        duracion: req.body.duracion,
        tema: req.body.tema,
        descripcion: req.body.descripcion},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("ProyectoDoctorado actualizada")
        res.send("ProyectoDoctorado actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

// exports.getConsultaInvestigador = (req,res)=>{
//     res.send('<h1>Datos de las consolas</h1>')
// }

