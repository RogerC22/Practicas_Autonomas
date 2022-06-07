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

// let personaa = { //mediante inferencia de tipos
//     nombre: 'Raul', //Se declaran los valores para los atributos
//     edad: 14,
//     direccion: {
//         calle: '312',
//         comuna: 'tarqui'
//     },
//     cursos: ['Flutter', 'Patrones de diseño', 'SQL']    
// };

// let hobbies: string[] = ['Futbol', 'Ps4', 'Escuchar Musica']; //arreglo string

// //recorrer un arreglo con un form

// for(const hobbie of hobbies){
//     console.log(hobbie.toLocaleUpperCase());
// }

// let hobbies2: any[] = ['Futbol', 'Ps4', 'Escuchar Musica', 1, 2, true]; //arreglo que admite cualquier tipo de dato "any"

// //console.log(hobbies);

// 4. Tipo de dato Tuples:

// type vehiculoType = [string, number, string]; //Definiendo una restriccion para los datos de cada arreglo
// let automovil: vehiculoType= ['Chevrolet', 2005, 'Verde']; //Se le asignan los tipos a cada atributo

// let motocicleta: vehiculoType = ['yamaha', 2005, 'rojo']; //Se usara entonces los tipos string, number, string de la restriccion
// console.log(automovil);


// 5. tipo de dato "Enums":
 
// enum role {estudiante, profesor} //mediante enum se asignan roles a la persona
// let personaa = { //mediante inferencia de tipos
//     nombre: 'Raul', //Se declaran los valores para los atributos
//     edad: 14,
//     direccion: {
//         calle: '312',
//         comuna: 'tarqui'
//     },
//     cursos: ['Flutter', 'Patrones de diseño', 'SQL'],
//     role: role.estudiante    
// };
// //6. tipo de dato "any" (no recomendable para evitar incumplir con el proposito de ts)
// let hobbies: any[] = ['Jugar smite', 'jugar clash royale', 'jugar genshin', 1];
// console.log(personaa);

// 7. tipo de dato literal:

// let vehiculo: 'automovil'; //un dato asignado que es tomado como un tipo, el cual no podra ser cambiado.

// vehiculo = 'dsdsd';

//Hasta 1:23:22 del video (seguir viendo desde funciones)
