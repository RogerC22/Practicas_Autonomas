const {check} = require('express-validator');
const expressv = require('./validarResultado');

const validacion = [
    check("nombre")
    .exists()
    .not().withMessage('El campo "nombre" es obligatorio')
    .notEmpty().withMessage('El campo esta vacio')
    .matches(/^[A-Z][A-z\s]+$/).withMessage('La primera letra debe ser MAYUSCULA obligatoriamente'),

    check("apellido")
    .exists()
    .not().withMessage('El campo "apellido" es obligatorio')
    .notEmpty().withMessage('El campo esta vacio')
    .matches(/^[A-Z][A-z\s]+$/).withMessage('La primera letra debe ser MAYUSCULA obligatoriamente'),
    
    //Longitud de contraseña minima
    check("password")
    .exists()
    .not().withMessage('El campo contraseña es obligatorio')
    .notEmpty().withMessage('El campo "password" esta vacio')
    .isLength({min:10}).withMessage('Longitud minima de 10 caracteres'),
    //Si las contraseñas coinciden
    check("repassword")
    .exists()
    .not().withMessage('El campo repassword es obligatorio')
    .notEmpty().withMessage('El campo "repassword" esta vacio')
    .isLength({min:10}).withMessage('Longitud minima de 10 caracteres')
    .custom(async(value,{req})=>{
        if(value !== req.body.password) {
            throw new Error ('Contraseñas no son iguales')
        }
    }),

    (req, res, next)=>{
        expressv(req, res, next);
    }
]

module.exports = validacion;