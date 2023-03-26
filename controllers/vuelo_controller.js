
var VueloModel = require('../models/vuelo_model'),
 VueloController = () => {}

 VueloController.getAll =(req,res,next) => {
    VueloModel.getAll((err,rows) => {
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
                title: 'Lista de Vuelos',
                data:rows
            }
            res.status(200).send(rows.rows)
            //res.render('index',locals)
        }
    })
 }

 VueloController.getOne=(req, res, next)=> {
    let codigo_de_vuelo= req.body.codigo_de_vuelo
    console.log(codigo_de_vuelo)

    AvionModel.getOne(codigo_de_vuelo,(err,rows)=> {
    console.log(err,'---',rows)
    if(err)
    {
        let locals={
            title: `Error al consultar la base de datos con el Id: ${codigo_de_vuelo}`,
            descripcion: 'Error de Sintaxis SQL',
            error: err
        }
        res.render('error',locals)
    }
    else
    {
        let locals ={
            title:'codigo_de_vuelo encontrado',
            data:rows
        }
        res.status(200).send(rows.rows)
    }
    })
}

 module.exports=VueloController;