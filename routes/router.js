"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero_controller"),
     AvionController = require("../controllers/avion_controller"),
     ReservaController = require("../controllers/reserva_controller"),
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
 
    //****AVION****
    .get("/avion/getall", AvionController.getAll)
    .post("/avion/getOne/:num_avion", AvionController.getOne)

    //****Reserva****/
    .get("/reserva/getall", ReservaController.getAll)
    .post("/reserva/getone/:numero_de_reservacion",ReservaController.getOne)
    .post("/reserva/insertar/:numero_de_reservacion",ReservaController.post)
    .put("/reserva/actualizar/:numero_de_reservacion",ReservaController.put)
    .delete("/reserva/eliminar/:numero_de_reservacion",ReservaController.delete)

    .use(ReservaController.error404);


module.exports = router;
