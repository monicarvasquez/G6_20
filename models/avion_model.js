"use strict";

var conn = require("../config/db-connection"),
    AvionModel = () => {};

    AvionModel.getAll = (cb) => conn.query("select * from avión",cb);  

    AvionModel.getOne = (num_avion, cb) =>conn.query("select * from avión where num_avion= $1", [num_avion], cb);

    AvionModel.post = (data,cb)=> 
    conn.query("call public.sp_avion_insert ($1,$2,$3,$4,$5,$6,$7)",
[
    data.num_avion,
    data.tipo_avion,
    data.horas_vuelo,
    data.cap_pasajeros,
    data.fecha_primer_avion,
    data.pais_construccion,
    data.cant_vuelos
],
cb);

AvionModel.put=(data,cb) => conn.query("call public.sp_avion_update ($1,$2,$3,$4,$5,$6,$7)",
[
    data.num_avion,
    data.tipo_avion,
    data.horas_vuelo,
    data.cap_pasajeros,
    data.fecha_primer_avion,
    data.pais_construccion,
    data.cant_vuelos
],
cb);

    module.exports = AvionModel;