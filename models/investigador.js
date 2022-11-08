const Sequelize = require('sequelize');

const Investigador = (sequelize) =>{
    sequelize.define('Investigador',{
        departamento: Sequelize.STRING(45),
        nombre: Sequelize.STRING(45),
    })
}

module.exports = Investigador;