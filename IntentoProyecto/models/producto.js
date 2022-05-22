//Definir atributos de cada una de las entidades
const { Schema, model } = require('mongoose')

const CarsSchema = Schema({
   numPlaca: {
       type: Number,
       required: [true, `El nombre del producto es obligatorio`],
       unique:true
   },
   carType: {
       type: String,
       default: null,
       required:true
   },
   color:{
       type:String,
       default:null
   },
   marca:{
       type:String,
       default:null
   },
   choferFullname:{
       type:String,
       default:null
   },
   userId:{
       type:Number,
       default:0
   },
   estado: {
    type: Boolean,
    default: true,
    required:true
    }
})

module.exports =  model('Carro',  CarsSchema );