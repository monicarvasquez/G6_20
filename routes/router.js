"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  PasajeroController = require("../controllers/pasajero_controller"),
     AvionController = require("../controllers/avion_controller"),
     ReservaController = require("../controllers/reserva_controller"),
     VueloController = require("../controllers/vuelo_controller"),
  express = require("express"),
  router = express.Router();

router
  //****PASAJERO****
  .get("/pasajero/getall", PasajeroController.getAll)
  .post("/pasajero/getOne/:codigo_pasajero", PasajeroController.getOne)
  .post("/pasajero/insertar/:codigo_pasajero", PasajeroController.post)
  .put("/pasajero/actualizar/:codigo_pasajero", PasajeroController.put)
  .delete("/pasajero/eliminar/:codigo_pasajero", PasajeroController.delete)
  
 
  //****AVION****
  .get("/avion/getall", AvionController.getAll)
  .post("/avion/getOne/:num_avion", AvionController.getOne)
  .post("/avion/insertar/:num_avion", AvionController.post)
  .put("/avion/actualizar/:num_avion", AvionController.put)
  .delete("/avion/eliminar/:num_avion", AvionController.delete)


   //****Reserva****
  .get("/reserva/getAll", ReservaController.getAll)
  .post("/reserva/getone/:numero_de_reservacion",ReservaController.getOne)
  .post("/reserva/insertar/:numero_de_reservacion",ReservaController.post)
  .put("/reserva/actualizar/:numero_de_reservacion",ReservaController.put)
  .delete("/reserva/eliminar/:numero_de_reservacion",ReservaController.delete)
  

  //****VUELO****
  .get("/vuelo/getall", VueloController.getAll)
  .post("/vuelo/getOne/:codigo_de_vuelo", VueloController.getOne)
  .post("/vuelo/insertar/:codigo_de_vuelo", VueloController.post)
  .put("/vuelo/actualizar/:codigo_de_vuelo", VueloController.put)
  .delete("/vuelo/eliminar/:codigo_de_vuelo", VueloController.delete)

  .use(PasajeroController.error404)
  .use(AvionController.error404)
  .use(ReservaController.error404)
  .use(VueloController.error404);
  
  


module.exports = router;
