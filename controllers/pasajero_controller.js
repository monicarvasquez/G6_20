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

 PasajeroController.getOne=(req, res, next)=> {
    let pasajero={
        codigo_pasajero: req.body.codigo_pasajero,
          
    }
    console.log(pasajero)
    PasajeroModel.getOne(pasajero,(err,rows)=>
    {  console.log(err,'---',rows)
    if(err)
    {
        let locals={
            title: `Error al consultar la base de datos con el Id: ${pasajero.codigo_pasajero}`,
            descripcion: 'Error de Sintaxis SQL',
            error: err
        }
        res.render('error',locals)
    }
    else{
        let locals ={
            title:'Pasajero Seleccionado',
            data:rows
        }
        res.status(200).send(rows.rows)
    }
    })
}
 module.exports=PasajeroController;