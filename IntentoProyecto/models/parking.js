const { Schema, model } = require('mongoose')

const ParkingsSchema = Schema({
   numParking: {
       type: Number,
       required: [true, `El nombre del parqueadero es obligatorio`],
       unique:true
   },
   adminId: { //Mirar si se puede agregar la relacion con admins
       type: Number,
       required:true,
       default: 0
   },
   capacidad: {
       type: Number,
       default: 0,
       required:true
   },
   hprecio:{
       type:Number,
       default:0
   },
   hgratis:{
       type:Number,
       default:0
   },
   available:{
       type:Boolean,
       default:true,
       required:true
   },
   ubicacion:{
       type:String,
       default:null,
       required:true
   },
   estado: {
    type: Boolean,
    default: true,
    required:true
    }
})


module.exports =  model('Parking',  ParkingsSchema);