const { Schema, model } = require('mongoose')

const AdminsSchema = Schema({
    cedula: {
        type: Number,
        required: [true, `La cedula del administrador es obligatoria`],
        unique:true
    },
    fullname: {
        type: String,
        default: null,
        required:true
    },
    estado: {
     type: Boolean,
     default: true,
     required:true
     }
 })

 module.exports =  model('Admin', AdminsSchema );