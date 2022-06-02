const express = require('express');
const objeto = require('../middlewares/index');
const abc = require('../repositorio/user');
const route = express.Router()
let estudiante = []

route.post("/objeto", objeto, (req, res)=>{
    const datos = req.body;
    abc(datos, estudiante)
    res.json(datos);
})

module.exports = route;
