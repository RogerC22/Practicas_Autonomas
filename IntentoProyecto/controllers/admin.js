const { response } = require('express')
 const { Admin } = require('../models')

 const obtenerAdmins= async  (req,res = response )=>{
     const { limite=10, desde=0 } =  req.query;
     const query = { estado:true };
    const [ total, admins ] = await  Promise.all([
         Admin.countDocuments(query),
         Admin.find(query)
    ])
    res.json({
        total,
        admins
    })
}
const obtenerAdmin = async (req,res= response) =>{
    const {id} = req.params;
    const admin = await  Admin.findById(id);
    res.json(admin);
}
const crearAdmin = async (req,res )=>{
        const {  estado,  ...body } =  req.body;

        const adminExiste = await Admin.findOne({ cedula:body.cedula });
        if (adminExiste)
        {
            res.status(400).json({
                message:
                `El producto con ese nombre ya existe ${adminExiste.cedula}`
            })
        }
        const admin = new Admin(body);
        const adminNuevo =  await admin.save();
        res.status(201).json(adminNuevo);

}
const actualizarAdmin = async (req,res )=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const adminModificado= await Admin.findByIdAndUpdate(id, data , { new:true } );
      res.json(adminModificado);
}
const borrarAdmin = async (req,res)=>{
    const { id } = req.params
    const adminBorrado= await Admin.findByIdAndUpdate(id,{estado:false}
        , {new:true});
    res.json(adminBorrado);
}
module.exports = {
    obtenerAdmins,
    obtenerAdmin,
    crearAdmin,
    actualizarAdmin,
    borrarAdmin
}