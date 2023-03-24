"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero_controller"),
  express = require("express"),
  router = express.Router();

router
  //****PASAJERO****
  .get("/pasajero/getall", PasajeroController.getAll)
  .post("/pasajero/getOne/:codigo_pasajero", PasajeroController.getOne)
  .post("/pasajero/insertar/:codigo_pasajero", PasajeroController.post)
  .put("/pasajero/actualizar/:codigo_pasajero", PasajeroController.put)
  //.delete("/alumno/eliminar/:no_cuenta", AlumnoController.delete)
  //.use(PasajeroController.error404);

module.exports = router;
