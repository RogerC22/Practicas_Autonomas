const{validationResult} = require('express-validator');

const resultado = (req, res, next)=>{
    try {
        validationResult(req).throw()
        return next();
    } catch (error) {
        res.status(400).send({error: error.array()})
    }
}

module.exports = resultado;