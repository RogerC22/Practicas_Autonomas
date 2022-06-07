//6. tipo de dato union
//Ejemplo trata de asignar espacios a una palabra mostrada por pantalla
// estos datos seran numericos o string segun corresponda y mediante union, se designara estos dos tipos

//Declaramos un type para reusar el valor en padding

type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber){ //en padding se define los dos tipos de datos admitidos, string y numerico
    if(typeof padding == 'number'){
        return Array(padding + 1).join(' ') + value;
    }

    if(typeof padding == 'string') {
        return padding + value;
    }

    throw new Error(`Espera unstring pero recibi '${padding}'.`);
}

console.log(padLeft('Hola Mundo', 2));