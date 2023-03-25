
var AvionModel = require('../models/avion_model'),
 AvionController = () => {}

 AvionController.getAll =(req,res,next) => {
    AvionModel.getAll((err,rows) => {
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
                title: 'Cantidad de Aviones',
                data:rows
            }
            res.status(200).send(rows.rows)
            //res.render('index',locals)
        }
    })
 }

 module.exports=AvionController;