"use strict";

var conn = require("../config/db-connection"),
    VueloModel = () => {};

    VueloModel.getAll = (cb) => conn.query("SELECT * FROM VUELO",cb);  

    module.exports = VueloModel;
    