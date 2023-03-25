
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

 AvionController.getOne=(req, res, next)=> {
    let num_avion= req.body.num_avion
    console.log(num_avion)

    AvionModel.getOne(num_avion,(err,rows)=> {
    console.log(err,'---',rows)
    if(err)
    {
        let locals={
            title: `Error al consultar la base de datos con el Id: ${num_avion}`,
            descripcion: 'Error de Sintaxis SQL',
            error: err
        }
        res.render('error',locals)
    }
    else
    {
        let locals ={
            title:'num_Avion encontrado',
            data:rows
        }
        res.status(200).send(rows.rows)
    }
    })
}

 module.exports=AvionController;