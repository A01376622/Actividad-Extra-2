const path = require("path");
const Universidad = require("../utils/database").models.Universidad;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
// exports.getAltaConsola = (req,res)=>{
//     //res.send('<h1>Formulario de consola</h1>')
//     res.sendFile(path.join(__dirname,'..','views','formulario.html'));
// }

//C
exports.postAgregarUniversidad = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Universidad.create(req.body)
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
exports.getUniversidades = (req,res)=>{
    //SELECT * from Consola;
    Universidad.findAll()
        .then(consolas=>{
            console.log("Universidades",consolas);
            res.send(consolas);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

//D
exports.postEliminarUniversidad=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Universidad.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Universidad eliminada")
        res.send("Universidad eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

//U
exports.postActualizarUniversidad=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    Universidad.update(
        {nombreUniversidad: req.body.nombreUniversidad,
         paisUniversidad: req.body.paisUniversidad,
         paginaWebUniversidad: req.body.paginaWebUniversidad},
        {
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("Universidad actualizada")
        res.send("Universidad actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

// exports.getConsultaConsola = (req,res)=>{
//     res.send('<h1>Datos de las consolas</h1>')
// }

