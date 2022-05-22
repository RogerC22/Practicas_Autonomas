const { response } = require('express')
 const { Carro } = require('../models')

 const obtenerCarros= async  (req,res = response )=>{
     const { limite=10, desde=0 } =  req.query;
     const query = { estado:true };
    const [ total, carros ] = await  Promise.all([
         Carro.countDocuments(query),
         Carro.find(query)
    ])
    res.json({
        total,
        carros
    })
}
const obtenerCarro = async (req,res= response) =>{
    const {id} = req.params;
    const carro = await  Carro.findById(id);
    res.json(carro);
}
const crearCarro = async (req,res )=>{
        const {  estado,  ...body } =  req.body;

        const carroExiste = await Carro.findOne({ numPlaca:body.numPlaca });
        if (carroExiste)
        {
            res.status(400).json({
                message:
                `El auto con esa placa ya existe ${carroExiste.numPlaca}`
            })
        }
        const carro = new Carro(body);
        const carroNuevo =  await carro.save();
        res.status(201).json(carroNuevo);

}
const actualizarCarro = async (req,res )=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const carroModificado= await Carro.findByIdAndUpdate(id, data , { new:true } );
      res.json(carroModificado);
}
const borrarCarro = async (req,res)=>{
    const { id } = req.params
    const carroBorrado= await Carro.findByIdAndUpdate(id,{estado:false}
        , {new:true});
    res.json(carroBorrado);
}
module.exports = {
    obtenerCarros,
    obtenerCarro,
    crearCarro,
    actualizarCarro,
    borrarCarro
}