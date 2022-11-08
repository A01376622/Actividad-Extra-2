const express = require('express');
const router = express.Router();
const proyectoDoctoradoController= require('../controllers/proyectoDoctorado')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
// router.get('/altaConsola',universidadController.getAltaConsola);

//Servicio para procesar los datos del formulario
router.post('/altaProyecto',proyectoDoctoradoController.postAgregarProyectoDoctorado);
//Servicio para consultar todos los datos
router.get('/consultaProyectos',proyectoDoctoradoController.getProyectoDoctorados);
//Servicio para eliminar un registro por id
router.post('/bajaProyecto', proyectoDoctoradoController.postEliminarProyectoDoctorado);
//Servicio para actualizar las consola
router.post('/actualizarProyecto',proyectoDoctoradoController.postActualizarProyectoDoctorado);

module.exports = router