"use strict";

var conn = require("../config/db-connection"),
    PasajeroModel = () => {};

PasajeroModel.getAll = (cb) => conn.query("SELECT * FROM PASAJERO",cb);  

module.exports = PasajeroModel;