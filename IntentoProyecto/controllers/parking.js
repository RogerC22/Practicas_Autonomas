const { response } = require('express')
 const { Parking } = require('../models')

 const obtenerParkings= async  (req,res = response )=>{
     const { limite=10, desde=0 } =  req.query;
     const query = { estado:true };
    const [ total, parkings ] = await  Promise.all([
         Parking.countDocuments(query),
         Parking.find(query)
    ])
    res.json({
        total,
        parkings
    })
}
const obtenerParking = async (req,res= response) =>{
    const {id} = req.params;
    const parking = await  Parking.findById(id);
    res.json(parking);
}
const crearParking = async (req,res )=>{
        const {  estado,  ...body } =  req.body;

        const parkingExiste = await Parking.findOne({ numParking:body.numParking });
        if (parkingExiste)
        {
            res.status(400).json({
                message:
                `El parking con este id ya existe ${parkingExiste.numParking}`
            })
        }
        const parking = new Parking(body);
        const parkingNuevo =  await parking.save();
        res.status(201).json(parkingNuevo);

}
const actualizarParking = async (req,res )=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const parkingModificado= await Parking.findByIdAndUpdate(id, data , { new:true } );
      res.json(parkingModificado);
}
const borrarParking = async (req,res)=>{
    const { id } = req.params
    const parkingBorrado= await Parking.findByIdAndUpdate(id,{estado:false}
        , {new:true});
    res.json(parkingBorrado);
}
module.exports = {
    obtenerParkings,
    obtenerParking,
    crearParking,
    actualizarParking,
    borrarParking
}