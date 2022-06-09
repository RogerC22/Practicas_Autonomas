// function sumar(valor: number, valor2: number) : number //definiendo una funcion que maneja 2 valores numericos y retorna un valor de tipo number
// {
//     return valor + valor2;
// }

//Creando una funcion flecha

const sumar = (valor1: number, valor2: number) : number =>{ //especificando por anotacion que valor retornar
    return valor1 + valor2;
};


let sumar2 = sumar;

// const dividir = function(a: number, b: number): number{
//     return a/b;
// }

function imprimir(): void{ //reutilizando la funcion sumar en otra funcion, retorna: void o valor nulo
    console.log(sumar(2, 3)); // se envia la funcion junto a 2 valores (valor1 y 2)
}

// imprimir();

console.log(sumar2(2, 3));

//Never en funciones

// const throwError = (message: string) =>{ //retorna never: nunca retorna nada
//     throw new Error(message);
// }


