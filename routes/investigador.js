const express = require('express');
const router = express.Router();
const investigadorController= require('../controllers/investigador')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
// router.get('/altaConsola',universidadController.getAltaConsola);

//Servicio para procesar los datos del formulario
router.post('/altaInvestigador',investigadorController.postAgregarInvestigador);
//Servicio para consultar todos los datos
router.get('/consultaInvestigadores',investigadorController.getInvestigadores);
//Servicio para eliminar un registro por id
router.post('/bajaInvestigador', investigadorController.postEliminarInvestigador);
//Servicio para actualizar las consola
router.post('/actualizarInvestigador',investigadorController.postActualizarInvestigador);

module.exports = router