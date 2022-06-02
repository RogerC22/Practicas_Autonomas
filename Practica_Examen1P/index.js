/**
 *  Librerias a instalar para el funcionamiento del programa:
 *  npm init --y
 *  npm install mongoose
 *  npm i express
 *  npm i express-validator
 *  npm i nodemon -D
 * 
 * npm init --y
    npm i cors
    npm i dotenv
    npm i mongoose
    ???
    1. CREAR 3 ARREGLOS, UNIR ESTOS Y ESE CONTENIDO DE LOS 3 PASARSELOS A OTRO OBJETO PARA MOSTRAR TODOS
    SUS ATRIBUTOS.
    2. DEL CONTENIDO DE ESE OBJETO, VALIDAR CONTRASEÑAS, CORREOS, NUMEROS, LONGITUD (SE HACE CON MIDDLEWARE)
 *  */

const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/v1', require('./routers/objeto'));

app.listen(PORT);
console.log('Servidor operativo');


    