const Sequelize = require('sequelize');

const ProyectoDoctorado = (sequelize) =>{
    sequelize.define('ProyectoDoctorado',{
        areas: Sequelize.STRING(45),
        duracion: Sequelize.INTEGER,
        tema: Sequelize.STRING(45),
        descripcion: Sequelize.STRING(100)
    })
}

module.exports = ProyectoDoctorado;