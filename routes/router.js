"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero_controller"),
     AvionController = require("../controllers/avion_controller"),
  express = require("express"),
  router = express.Router();

router
  //****PASAJERO****
  .get("/pasajero/getall", PasajeroController.getAll)
  .post("/pasajero/getOne/:codigo_pasajero", PasajeroController.getOne)
  .post("/pasajero/insertar/:codigo_pasajero", PasajeroController.post)
  //.put("/alumno/actualizar/:no_cuenta", AlumnoController.put)
  //.delete("/alumno/eliminar/:no_cuenta", AlumnoController.delete)
  //.use(PasajeroController.error404);
 
    //****AVION****
    .get("/avion/getall", AvionController.getAll)
    .post("/avion/getOne/:numero_avion", AvionController.getOne)
    .post("/avion/insertar/:numero_avion", AvionController.post)
    .put("/avion/actualizar/:numero_avion", AvionController.put)
    .delete("/avion/eliminar/:numero_avion", AvionController.delete)

    .use(AvionController.error404);


module.exports = router;
