const { response } = require('express')
 const { User } = require('../models')

 const obtenerUsers= async  (req,res = response )=>{
     const { limite=10, desde=0 } =  req.query;
     const query = { estado:true };
    const [ total, users ] = await  Promise.all([
         User.countDocuments(query),
         User.find(query)
    ])
    res.json({
        total,
        users
    })
}
const obtenerUser = async (req,res= response) =>{
    const {id} = req.params;
    const user = await  User.findById(id);
    res.json(user);
}
const crearUser = async (req,res )=>{
        const {  estado,  ...body } =  req.body;

        const userExiste = await User.findOne({ cedula:body.cedula });
        if (userExiste)
        {
            res.status(400).json({
                message:
                `El usuario con esa cedula ya existe ${userExiste.cedula}`
            })
        }
        const user = new User(body);
        const userNuevo =  await user.save();
        res.status(201).json(userNuevo);

}
const actualizarUser = async (req,res )=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const userModificado= await User.findByIdAndUpdate(id, data , { new:true } );
      res.json(userModificado);
}
const borrarUser = async (req,res)=>{
    const { id } = req.params
    const userBorrado= await User.findByIdAndUpdate(id,{estado:false}
        , {new:true});
    res.json(userBorrado);
}
module.exports = {
    obtenerUsers,
    obtenerUser,
    crearUser,
    actualizarUser,
    borrarUser
}