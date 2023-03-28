
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

    VueloModel.getOne(codigo_de_vuelo,(err,rows)=> {
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

VueloController.post=(req, res, next)=> {
    let vuelo={
        codigo_de_vuelo: req.body.codigo_de_vuelo,
        ciudad_origen: req.body.ciudad_origen,
        ciudad_destino: req.body.ciudad_destino,
        fecha_de_vuelo: req.body.fecha_de_vuelo,
        cantidad_de_pasajeros: req.body.cantidad_de_pasajeros,
        tipo_avion: req.body.tipo_avion,
        distancia_km: req.body.distancia_km
    }
    console.log(vuelo)

    VueloModel.post(vuelo,(err)=>{
        if(err){
            let locals={
                title: `Error al salvar el registro con el id: ${vuelo.codigo_de_vuelo}`,
                description: "Error de Sintaxis SQL",
                error: err
            }
            //res.render('error',locals)
            res.status(520).json(err); 
        }
        else{
            res.send('Vuelo Ingresado de Forma Correcta')
            //res.redirect('/')
        }
    })
 }
 VueloController.put=(req, res, next)=> {
    let vuelo={
        codigo_de_vuelo: req.body.codigo_de_vuelo,
        ciudad_origen: req.body.ciudad_origen,
        ciudad_destino: req.body.ciudad_destino,
        fecha_de_vuelo: req.body.fecha_de_vuelo,
        cantidad_de_pasajeros:req.body.cantidad_de_pasajeros,
        tipo_avion: req.body.tipo_avion,
        distancia_km: req.body.distancia_km
    }
    console.log(vuelo)

    VueloModel.put(vuelo,(err)=>{
        if(err){
            let locals={
                title: `Error al salvar el registro con el id: ${vuelo.codigo_de_vuelo}`,
                description: "Error de Sintaxis SQL",
                error: err
            }
            //res.render('error',locals)
            res.status(520).json(err); 
        }
        else{
            res.send('Vuelo Actualizado Correctamente')
            //res.redirect('/')
        }
    })
 }

 VueloController.delete=(req, res, next)=> {
    let vuelo={
        codigo_de_vuelo: req.body.codigo_de_vuelo
    }
    console.log(vuelo)

    VueloModel.delete(vuelo,(err,rows)=>
    {  console.log(err,'---',rows)
    if(err)
    {
        let locals={
            title: `Error al consultar la base de datos con el Id: ${vuelo.codigo_de_vuelo}`,
            descripcion: 'Error de Sintaxis SQL',
            error: err
        }
        res.status(520).json(err);
    }
    else{
        
        res.send('Vuelo Eliminado')
    }
    })
}

VueloController.error404=(req, res, next)=>{
    let error = new Error(),
    locals ={
        title: `Error 404`,
        descripcion: 'Recurso no encontrado',
        error: error
    }
}

 module.exports=VueloController;