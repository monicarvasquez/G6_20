'use strict'

var ReservaModel = require('../models/reserva_model'),
    ReservaController = () => {}

    ReservaController.getAll =(req,res,next) => {

        ReservaModel.getAll((err, rows) =>{
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

    ReservaController.getOne = (req, res, next) =>{
        let numero_de_reservacion = req.body.numero_de_reservacion
        console.log(numero_de_reservacion)

        ReservaModel.getOne(numero_de_reservacion, (err, rows) => {
            console.log(err, '---', rows)
            if(err)
            {
                let locals = {
                    title : `Error al consultar la base de datos con el Id: ${numero_de_reservacion}`,
                    description : "Error de Sintaxis SQL",
                    error : err
                }

                res.render('error', locals)

            }
            else
            {
                let locals = {
                    title : 'Editar Reserva',
                    data : rows
                }
                res.status(200).send(rows.rows)
            }
        })
    }

    ReservaController.post = (req, res, next) =>{
        let reserva = {

            numero_de_reservacion : req.body.numero_de_reservacion,
            codigo_de_vuelo : req.body.codigo_de_vuelo,
            codigo_de_pasajero : req.body.codigo_de_pasajero,
            nombre_psajero : req.body.nombre_psajero,
            ciudad_destino : req.body.ciudad_destino,
            fecha_de_vuelo : req.body.fecha_de_vuelo,
            precio_vuelo : req.body.precio_vuelo

        }

        console.log(reserva)

        ReservaModel.post(reserva, (err) => {
            if(err)
            {
                let locals = {
                    title : `Error al salvar la Reserva con el Id: ${reserva.numero_de_reservacion}`,
                    description : "Error de Sintaxis SQL",
                    error : err
                }

                //res.render('error', locals)
                res.status(520).json(err);
            }
            else
            {
                res.send('Reserva Ingresada de Forma Correcta')
                //res.redirect('/')
            }
        })
    }

    ReservaController.put = (req, res, next) =>{
        let reserva = {

            numero_de_reservacion : req.body.numero_de_reservacion,
            codigo_de_vuelo : req.body.codigo_de_vuelo,
            codigo_de_pasajero : req.body.codigo_de_pasajero,
            nombre_psajero : req.body.nombre_psajero,
            ciudad_destino : req.body.ciudad_destino,
            fecha_de_vuelo : req.body.fecha_de_vuelo,
            precio_vuelo : req.body.precio_vuelo

        }

        console.log(reserva)

        ReservaModel.put(reserva, (err) => {
            if(err)
            {
                let locals = {
                    title : `Error al Actualizar la Reserva con el Id: ${reserva.numero_de_reservacion}`,
                    description : "Error de Sintaxis SQL",
                    error : err
                }

                //res.render('error', locals)
                res.status(520).json(err);
            }
            else
            {
                res.send('Reserva Actualizada de Forma Correcta')
                //res.redirect('/')
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