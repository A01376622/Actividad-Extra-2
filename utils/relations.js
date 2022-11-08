// function applyRelations(sequelize){
//     console.log(sequelize.models);
//     const Company = sequelize.models.Company;
//     const Videojuego = sequelize.models.Videojuego;
//     const Consola = sequelize.models.Consola;
//     const ConsolaVideojuego= sequelize.models.ConsolaVideojuego;
//     //Compañia puede desarrollar varios videojuegos
//     Company.hasMany(Videojuego);
//     //Un videojuego solo puede ser desarrollado por una compañia
//     Videojuego.belongsTo(Company);
//     //Un videojuego puede ejecutarse en muchas consolas
//     Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego});
//     //Una consola puede tener muchos videojuegos
//     Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego});
    
// }

function applyRelations(sequelize){
    console.log(sequelize.models);
    const Investigador = sequelize.models.Investigador;
    const Universidad = sequelize.models.Universidad;
    const ProyectoDoctorado = sequelize.models.ProyectoDoctorado;

    //Universidad puede tener varios investigadores
    Universidad.hasMany(Investigador);
    //Investigador puede tener varios proyectos de doctorado
    Investigador.hasMany(ProyectoDoctorado);
    //Un investigador solo puede pertenecer a una universidad
    Investigador.belongsTo(Universidad);
    //Un proyecto solo puede ser desarrollado por un investigador
    ProyectoDoctorado.belongsTo(Investigador);

    
}

module.exports = {applyRelations};