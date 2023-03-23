'use strict'

var PasajeroModel = require('../models/pasajero_model'),
 PasajeroController = () => {}

 PasajeroController.getAll =(req,res,next) => {
    PasajeroModel.getAll((err,rows) =>{
        if(err)
        {
            let locals ={
                title: 'Error al consultar la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error',locals)
        }
        else
        {
            let locals ={
                title: 'Lista de Pasajeros',
                data:rows
            }
            res.status(200).send(rows.rows)
            //res.render('index',locals)
        }
    })
 }
 module.exports=PasajeroController;