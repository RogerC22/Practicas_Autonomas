const { response } = require('express')
 const { Pago } = require('../models')

 const obtenerPagos= async  (req,res = response )=>{
     const { limite=10, desde=0 } =  req.query;
     const query = { estado:true };
    const [ total, pagos ] = await  Promise.all([
         Pago.countDocuments(query),
         Pago.find(query)
    ])
    res.json({
        total,
        pagos
    })
}
const obtenerPago = async (req,res= response) =>{
    const {id} = req.params;
    const pago = await  Pago.findById(id);
    res.json(pago);
}
const crearPago = async (req,res )=>{
        const {  estado,  ...body } =  req.body;

        const pagoExiste = await Pago.findOne({ parking_Id:body.parking_Id });
        if (pagoExiste)
        {
            res.status(400).json({
                message:
                `El producto con ese nombre ya existe ${pagoExiste.parking_Id}`
            })
        }
        const pago = new Pago(body);
        const pagoNuevo =  await pago.save();
        res.status(201).json(pagoNuevo);

}
const actualizarPago = async (req,res )=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const pagoModificado= await Pago.findByIdAndUpdate(id, data , { new:true } );
      res.json(pagoModificado);
}
const borrarPago = async (req,res)=>{
    const { id } = req.params
    const pagoBorrado= await Pago.findByIdAndUpdate(id,{estado:false}
        , {new:true});
    res.json(pagoBorrado);
}
module.exports = {
    obtenerPagos,
    obtenerPago,
    crearPago,
    actualizarPago,
    borrarPago
}