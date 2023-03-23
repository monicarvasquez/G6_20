"use strict";

var conn = require("../config/db-connection"),
    PasajeroModel = () => {};

PasajeroModel.getAll = (cb) => conn.query("SELECT * FROM PASAJERO",cb);  

PasajeroModel.getOne =(data,cb) => conn.query("SELECT * FROM PASAJERO WHERE CODIGO_PASAJERO = $1", [data.codigo_pasajero],cb);

module.exports = PasajeroModel;