
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

AvionController.post=(req, res, next)=> {
    let avion={
        num_avion: req.body.num_avion,
        tipo_avion: req.body.tipo_avion,
        horas_vuelo: req.body.horas_vuelo,
        cap_pasajeros: req.body.cap_pasajeros,
        fecha_primer_avion:req.body.fecha_primer_avion,
        pais_construccion: req.body.pais_construccion,
        cant_vuelos: req.body.cant_vuelos
    }
    console.log(avion)

    AvionModel.post(avion,(err)=>{
        if(err){
            let locals={
                title: `Error al salvar el registro con el id: ${avion.num_avion}`,
                description: "Error de Sintaxis SQL",
                error: err
            }
            //res.render('error',locals)
            res.status(520).json(err); 
        }
        else{
            res.send('Registro Ingresado de Forma Correcta')
            //res.redirect('/')
        }
    })
 }

 AvionController.put=(req, res, next)=> {
    let avion={
        num_avion: req.body.num_avion,
        tipo_avion: req.body.tipo_avion,
        horas_vuelo: req.body.horas_vuelo,
        cap_pasajeros: req.body.cap_pasajeros,
        fecha_primer_avion:req.body.fecha_primer_avion,
        pais_construccion: req.body.pais_construccion,
        cant_vuelos: req.body.cant_vuelos
    }
    console.log(avion)

    AvionModel.put(avion,(err)=>{
        if(err){
            let locals={
                title: `Error al salvar el registro con el id: ${avion.num_avion}`,
                description: "Error de Sintaxis SQL",
                error: err
            }
            //res.render('error',locals)
            res.status(520).json(err); 
        }
        else{
            res.send('Registro Actualizado Correctamente')
            //res.redirect('/')
        }
    })
 }

 AvionController.delete=(req, res, next)=> {
    let avion={
        num_avion: req.body.num_avion
    }
    console.log(avion)

    AvionModel.delete(avion,(err,rows)=>
    {  console.log(err,'---',rows)
    if(err)
    {
        let locals={
            title: `Error al consultar la base de datos con el Id: ${avion.num_avion}`,
            descripcion: 'Error de Sintaxis SQL',
            error: err
        }
        res.status(520).json(err);
    }
    else{
        
        res.send('Registro Eliminado')
    }
    })
}
AvionController.error404=(req, res, next)=>{
    let error = new Error(),
    locals ={
        title: `Error 404`,
        descripcion: 'Recurso no encontrado',
        error: error
    }
}

 module.exports=AvionController;