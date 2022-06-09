
/*Creando interfaces para mostrar un objeto "medico" mediante una funcion que llame a cada uno de sus atributos,
con el objetivo de reusar dicha funcion "mostrarStaff" en otros objetos*/

enum Role {
    Doctor,
    Enfermero,
    Cirujano,
    Asistente
}

//Creando la interface para manejar y reusar los atributos del staff

interface Staff{
    nombre: string,
    email: string,
    role: Role
}

//Definimos un objeto "medico"
const medico = {
    nombre: "Martin",
    email: "hola@gmail.com",
    role: Role.Doctor
}

//Mostramos la staff mediante una funcion y recibiendo como parametros la interface (Staff)
const mostrarStaff = (staff: Staff) =>{
    console.log(staff);
}

//Llamamos a la funcion mostrarStaff pasandole el parametro/objeto medico y asi mostrar sus atributos/contenido
mostrarStaff(medico);   