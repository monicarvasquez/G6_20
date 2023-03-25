'use strict'

var ReservaModel = require('../models/reserva_model'),
    ReservaController = () => {}

    ReservaController.getAll =(req,res,next) => {
        ReservaModel.getAll((err,rows) =>{
            if(err)
            {
                let locals = {
                    title: 'Error al consultar la base de datos',
                    description: 'Error de Sintaxis SQL',
                    error: err
                }
                res.render('error',locals)
            }
            else
            {
                let locals = {
                    title: 'Lista de Reservas',
                    data:rows
                }
                res.status(200).send(rows.rows)
                //res.render('index',locals)
            }
        })
     }

    ReservaController.error404 = (req, res, next) =>{
        let error = new Error(),
            locals = {
                title : 'Error 404',
                description : 'Recurso No Encontrado',
                error : error
            }
        error.status = 404

        res.render('error',locals)

        next()
    }

    module.exports = ReservaController;