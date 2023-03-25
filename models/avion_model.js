"use strict";

var conn = require("../config/db-connection"),
    AvionModel = () => {};

    AvionModel.getAll = (cb) => conn.query("select * from avión",cb);  



    module.exports = AvionModel;