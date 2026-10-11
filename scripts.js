console.log("¡Hola! Bienvenido al programa de saludo.");
// esto es un comentario de una linea
/* Esto es un comentario de varias líneas 
buscando por su id 
o también por medio de su correo  */

/** Este archivo represnta
 * una serie de sistemas que funciona si o si
 * hola mundo
 */

// var hola = "hola";
// console.log(hola);

// number

// console.log(typeof 550);

//  string
// console.log(typeof "Hola mundo");

// boolean
// console.log(typeof true);
// console.log(typeof false);

// Array, me da object
// console.log(typeof ["hola", "mundo"]);

// object
// console.log(typeof { nombre: "mel", apellido: "yopla" });

// null
// console.log(typeof null);

// undefined
// console.log(typeof undefined);

// NaN
// console.log(typeof NaN);

// -------------------------
/**
 * variables
 * var
 * let
 * const
 */

// var alumno = "Mel Yopla";
// console.log(alumno);

// let alumno2;
// console.log(alumno2);

// let alumno2 = "Mel Yopla 2";
// console.log(alumno2);

// alumno2 = "Mel Yopla 3";
// console.log(alumno2);

/** Asignacion por referencia */

/* let teacher = "Mel";
let student = teacher;

teacher = "Yopla";

console.log(teacher);
console.log(student); */

/** constantes */

// const teacher = "Mel";
// console.log(teacher);

// teacher = "Yopla"; // Esto no se puede hacer porque es una constante

// const NOMBRE_EMPRESA = "Mel Yopla S.A.";
// const SITIO_WEB = "www.melyopla.com";
// const NOMBRE_EMPRESA = "Mel Yopla S.A.";
// console.log(NOMBRE_EMPRESA); // Error: Identifier 'NOMBRE_EMPRESA' has already been declared

/**
 * Operadores aritmeticos
 * +, -, *, /, %
 *
 */
// let operacion = 50 + 60;
// console.log(operacion);

// let operacion2 = 50 - 60;
// console.log(operacion2);

// let operacion3 = 50 * 60;
// console.log(operacion3);

// let operacion4 = 50 / 60;
// console.log(operacion4);

// let operacion5 = 50 % 4;
// console.log(operacion5);

/**
 * Operadores de asignacion
 * =, +=, -=, *=, /=, %=
 */

// let a = 10;
// let b = 4;

// a = a + b;
// a += b; // a = 10 + 4 = 14
// console.log(a);

/**
 * operadores de concatenacion
 * +, +=
 */
// let nombre = "Mel";
// let apellido = "Yopla";

// let nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);

// template string
// let nombreCompleto2 = `Mi nombre es: ${nombre} ${apellido}`;
// console.log(nombreCompleto2);

/**
 * Operadores de comparacion
 * ==, !=, ===, !==, >, <, >=, <=
 */

// es igual a
// let a = 10;
// let b = "10";

// console.log(a == b); // true

// no es igual a
// console.log(a != b); // false

// es estrictamente igual a
// console.log(a === b); // false

// no es estrictamente igual a
// console.log(a !== b); // true

// let a = 10;
// let b = 20;

// mayor que
// console.log(a > b); // false

// // menor que
// console.log(a < b); // true

// mayor o igual que
// console.log(a >= b); // false

// menor o igual que
// console.log(a <= b); // true

/**
 * operadores logicos
 * &&, ||, !
 */

// let a = 10;
// let b = 20;
// let c = 30;

// saber si b es mayor que a y menor que c
// console.log(b > a && b < c); // true

// saber si b es mayor que a o menor que c
// console.log(b > a || b < c); // true

// negar una condicion
// console.log(!(b > a && b < c)); // false

/**
 * operadores unarios y ternarios
 */

// let a = 10;
// operador unario
// a++; // a = a + 1
// console.log(a); // 11

// a--; // a = a - 1
// console.log(a); // 10

// operador ternario
// let b = a > 10 ? "Mayor que 10" : "Menor o igual que 10";
// console.log(b); // Menor o igual que 10

/**
 * type coercion
 * es la conversion de un tipo de dato a otro
 * por ejemplo, convertir un string a un numero
 * o un numero a un string
 * o un booleano a un numero
 * o un booleano a un string
 * o un array a un string
 * o un objeto a un string
 * o un null a un string
 * o un undefined a un string
 */

// let a = "10";
// let b = 20;

// convertir a string a numero
// let c = Number(a);
// console.log(c); // 10

// let d = a + b;
// console.log(d); // 1020
// console.log(typeof d); // string

/**
 * Condicionales
 * if, else if, else, switch
 */

// if (true) {
//   console.log("La condicion es verdadera");
// }

// let edad = 17;
// let persona = "Mel Yopla";

// if (edad >= 18 && persona === "Mel Yopla") {
//   console.log("La persona es mayor de edad y se llama Mel Yopla");
// } else {
//   console.log("La persona es menor de edad o no se llama Mel Yopla");
// }

/**
 * conndicionales multiples
 */

// let personalidad = "Pequeño y debil";

// switch (personalidad) {
//   case "Fuerte y comelon":
//     console.log("Eres Goku");
//     break;
//   case "Veloz y egoista":
//     console.log("Eres vegueta");

//     break;

//   default:
//     console.log("Te falta personalidad");
//     break;
// }

/**
 * Ciclos , bucles o loops
 */
let valor = 0;
for (let index = 0; valor < 5; index++) {
  valor = index;
  console.log(valor);
  console.log(index);
}
console.log(valor);
