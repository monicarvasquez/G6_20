"use strict"

var conn = require("../config/db-connection"),
  ReservaModel = () => {};

  ReservaModel.getAll = (cb) => conn.query("SELECT * FROM RESERVA", cb);

  ReservaModel.getOne = (numero_de_reservacion, cb) =>
   conn.query(
   "SELECT * FROM RESERVA WHERE NUMERO_DE_RESERVACION = $1", [numero_de_reservacion], cb);

   ReservaModel.post = (data, cb) =>

   conn.query("call public.sp_reserva_insert ($1,$2,$3,$4,$5,$6,$7)",
   [
    data.numero_de_reservacion,
    data.codigo_de_vuelo,
    data.codigo_de_pasajero,
    data.nombre_psajero,
    data.ciudad_destino,
    data.fecha_de_vuelo,
    data.precio_vuelo,
   ],
   cb);

   ReservaModel.put = (data, cb) =>

   conn.query("call public.sp_reserva_update ($1,$2,$3,$4,$5,$6,$7)",
   [
    data.numero_de_reservacion,
    data.codigo_de_vuelo,
    data.codigo_de_pasajero,
    data.nombre_psajero,
    data.ciudad_destino,
    data.fecha_de_vuelo,
    data.precio_vuelo,
   ],
   cb);

   ReservaModel.delete= (data, cb) =>conn.query("call public.sp_reserva_delete ($1)",[data.numero_de_reservacion],cb);


  module.exports = ReservaModel;