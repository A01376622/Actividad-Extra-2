const Sequelize = require('sequelize');

const Universidad = (sequelize) =>{
    sequelize.define('Universidad',{
        nombreUniversidad: Sequelize.STRING(60),
        paisUniversidad: Sequelize.STRING(45),
        paginaWebUniversidad: Sequelize.STRING(100)
    })
}

module.exports = Universidad;