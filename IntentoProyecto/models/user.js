const { Schema, model } = require('mongoose')

const UsersSchema = Schema({
    cedula: {
        type: Number,
        required: [true, `La cedula del usuario es obligatoria`],
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

 module.exports =  model('User', UsersSchema );