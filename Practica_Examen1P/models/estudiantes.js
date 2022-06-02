

//Definimos la cadena de conexion para mongodb
const mongoose = require('mongoose');
const conexion = 'mongodb+srv://Roger:0105@cluster0.qnull.mongodb.net/Practic_Prueb?retryWrites=true&w=majority';

( async ()=>{
    const conexionEstado = await mongoose.connect(conexion);

    //Creamos las entidades con sus atributos
    const Estudiantes = mongoose.model("Estudiantes",{
        nombre:String,
        apellido:String,
        edad:Number,
    });
    const DatosEstudiantes = mongoose.model("DatosEstudiantes",{
        correo:String,
        contraseña:String
    });
    const ContactoEstudiantes = mongoose.model("ContactoEstudiantes",{
        numero_tlf:Number,
        direccion:String
    })

    //Reuniendo atributos de los arreglos
    const InfoEstudia = mongoose.model("InfoEstudia",{
        
    })


})


