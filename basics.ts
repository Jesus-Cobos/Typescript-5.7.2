// Javascript => Typescript
// Transpilation = Pasar de lenguaje alto nivel a otro de alto nivel
// Cuanto mas alto el nivel, mas ase asemeja al lenguaje humano
//  -> Cuanto mas bajo, mas es parecido al lenguaje de máquina, el nivel mas bajo es el binario 0 & 1



// Primitivos => string / boolean / number
/*  
    let a: unknown = 1; // unknown / string / boolean / umber / array
    a = "1"; // String
    a = 2; // Number
    a = [ 1 ] // Array
    a = 
*/
/* 
    let a: [number, string, boolean] = [ 1, "hola", true]
 */



// Funciones
/* function name(params:type) {
    const a = suma(1, 2) // 3 => number + number = number
    const b = suma("a", 2) // "a2" => string + ¿number? = ¿?¿?¿? 
    // string + tranforma(number -> string) = string
    // ts tranforma el numbera a string para que el resultado de B sea string.
} */

// Interfaces

/* interface User {
    name: string;

    getName: (name: string, surname: string) => string,
}

interface Cliente extends User {
    surname: string;
}

// Clases
class UserClass {
    name: string;
    surname: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(name: string, surname: string) {
        return this.name;
    }
}

const user: UserClass = {  */// Funciona porque cumple con la forma de las cosas, es decir, cumple con el concepto de shape de typescript
/* const user: Cliente = { */
/*     name: "Jesus",
    surname: "Cobos",

    getName: (name: string, surname: string) => {
        return name + surname
    },
} */