"use strict";

var conn = require("../config/db-connection"),
    AvionModel = () => {};

    AvionModel.getAll = (cb) => conn.query("select * from avión",cb);  

    AvionModel.getOne = (num_avion, cb) =>conn.query("select * from avión where num_avion= $1", [num_avion], cb);



    module.exports = AvionModel;