"use strict";

var conn = require("../config/db-connection"),
    VueloModel = () => {};

    VueloModel.getAll = (cb) => conn.query("SELECT * FROM VUELO",cb);  

    VueloModel.getOne = (codigo_de_vuelo, cb) =>conn.query("select * from vuelo where codigo_de_vuelo= $1", [codigo_de_vuelo], cb);

    VueloModel.post = (data,cb)=> 
    conn.query("call public.sp_vuelo_insert ($1,$2,$3,$4,$5,$6,$7)",
[
    data.codigo_de_vuelo,
    data.ciudad_origen,
    data.ciudad_destino,
    data.fecha_de_vuelo,
    data.cantidad_de_pasajeros,
    data.tipo_avion,
    data.distancia_km
],
cb);        

VueloModel.put=(data,cb) => conn.query("call public.sp_vuelo_update ($1,$2,$3,$4,$5,$6,$7)",
[
    data.codigo_de_vuelo,
    data.ciudad_origen,
    data.ciudad_destino,
    data.fecha_de_vuelo,
    data.cantidad_de_pasajeros,
    data.tipo_avion,
    data.distancia_km
],
cb);

VueloModel.delete= (data, cb) =>conn.query("call public.sp_vuelo_delete ($1)",[data.codigo_de_vuelo],cb);

module.exports = VueloModel;
    