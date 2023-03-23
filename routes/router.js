"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero_controller"),
  express = require("express"),
  router = express.Router();

router
  //****ALUMNO EJEMPLO****
  .get("/pasajero/getall", PasajeroController.getAll)
  .get("/pasajero/getOne/:codigo_pasajero", PasajeroController.getOne)
  //.post("/alumno/insertar/:no_cuenta", AlumnoController.post)
  //.put("/alumno/actualizar/:no_cuenta", AlumnoController.put)
  //.delete("/alumno/eliminar/:no_cuenta", AlumnoController.delete)
  //.use(PasajeroController.error404);

module.exports = router;
