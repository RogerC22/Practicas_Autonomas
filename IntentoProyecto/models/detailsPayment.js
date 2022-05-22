//Modelo para pagos
//Revisar implementacion de RELACIONES
// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const PagosSchema = Schema({
    numPagoDay: {
        type: Number,
        required: [true, `El numero del pago es obligatorio`],
        unique:true
    },
    parkingId: {
        type: Number,
        default: null,
        required:true
    },
    hEntrada: {
        type: Date,
        default: null,
        required:true
    },
    hSalida: {
        type: Date,
        default: null,
        required:true
    },
    carId: {
        // type: mongoose.Types.ObjectId, ref: 'carros',
        type: Number,
        default: 0,
        required:true
    },
    space: {
        type: String,
        default: null,
        required:true
    },
    priceDolar: {
     type: Number,
     default: 0,
     required:true
     },
     estado: {
        type: Boolean,
        default: true,
        required:true
    }
 })

 module.exports =  model('Pago', PagosSchema );