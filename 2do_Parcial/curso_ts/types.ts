//1. Anotación de tipos: ":" "Asignar a la variable su tipo directamente"
// Para variables con valores volatiles

// let vehiculo: string;
// let cantidad: number;
// let esAutomovil: boolean;

//Inferencia de tipos: "=" "Dejar que typescript deduzca el tipo de dato por el contenido"
// Para valores por defecto (asignados en el codigo)

// let vehiculo2 = 'Mazda';
// let cantidad2 = 5;
// let esAutomovil2 = true;

// cantidad2 = 5 * 6;

//2. Trabajando con objetos

// let persona: { //Se definen primero los atributos junto al tipo de datos que le corresponde "tipado de datos"
//     nombre: string,
//     edad: number,
//     direccion: {
//         calle: string,
//         comuna: string
//     }
// }= {
//     nombre: 'Raul', //Se declaran los valores para los atributos
//     edad: 14,
//     direccion: {
//         calle: '312',
//         comuna: 'tarqui'
//     },
    
// };

// console.log(persona);

//3. Definiendo arreglos

let personaa = { //mediante inferencia de tipos
    nombre: 'Raul', //Se declaran los valores para los atributos
    edad: 14,
    direccion: {
        calle: '312',
        comuna: 'tarqui'
    },
    cursos: ['Flutter', 'Patrones de diseño', 'SQL']    
};

let hobbies: string[] = ['Futbol', 'Ps4', 'Escuchar Musica']; //arreglo string

let hobbies2: any[] = ['Futbol', 'Ps4', 'Escuchar Musica', 1, 2, true]; //arreglo que admite cualquier tipo de dato "any"

console.log(hobbies);