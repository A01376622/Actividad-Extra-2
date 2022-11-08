const path = require("path");
const Investigador = require("../utils/database").models.Investigador;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
// exports.getAltaInvestigador = (req,res)=>{
//     //res.send('<h1>Formulario de Investigador</h1>')
//     res.sendFile(path.join(__dirname,'..','views','formulario.html'));
// }

//C
exports.postAgregarInvestigador = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Investigador VALUES ()
    Investigador.create(req.body)
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
exports.getInvestigadores = (req,res)=>{
    //SELECT * from Investigador;
    Investigador.findAll()
        .then(investigadores=>{
            console.log("Investigadores",investigadores);
            res.send(investigadores);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

//D
exports.postEliminarInvestigador=(req,res)=>{
    //DELETE FROM Investigador WHERE id=
    console.log(req.body)
    Investigador.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Investigador eliminado")
        res.send("Investigador eliminado")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

//U
exports.postActualizarInvestigador=(req,res)=>{
    //UPDATE Investigador SET WHERE id=
    console.log(req.body)
    Investigador.update({
        departamento: req.body.departamento,
        nombre: req.body.nombre},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("Investigador actualizada")
        res.send("Investigador actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

// exports.getConsultaInvestigador = (req,res)=>{
//     res.send('<h1>Datos de las consolas</h1>')
// }

