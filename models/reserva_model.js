"use strict"

var conn = require("../config/db-connection"),
  ReservaModel = () => {};

  ReservaModel.getAll = (cb) => conn.query("SELECT * FROM RESERVA", cb);

  module.exports = ReservaModel;