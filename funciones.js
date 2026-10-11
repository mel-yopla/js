/**
 * Funciones
 */

function saludar(name) {
  console.log(`Hello world ..... ${name}`);
}

saludar("Mel");

/**
 * Parámetros
 */

function obtenerNombreCompleto(nombre, apellidos) {
  let nombreCompleto = `${nombre} ${apellidos}`;
  return nombreCompleto;
}

const result = obtenerNombreCompleto("Melquiades", "Yopla F");
console.log(result);

/**
 * Funciones de primera clase
 */

// tipos de datos primitivos => ciudadadonos de primera clase
const funcion = obtenerNombreCompleto;
console.log(funcion);

/**
 * Funciones anonimas => no tienen nombre
 * Escribirmos parametros y la accion que se va a realizar
 */

let sumar = function (a, b, c) {
  return a + b + c;
};
console.log(sumar);
console.log(sumar(1, 2, 3));

/**
 * tambien pueden ser autoinvocadas,parentesis al inicio y final
 */

(function (a, b, c) {
  console.log(a + b + c);
})(5, 6, 7);

/**
 * Funciones como constantes
 *
 */

const saludar1 = function (nombre) {
  console.log(`Hola ${nombre}, dentro funcion -  efecto secundario`);
  return `Hola ${nombre}`;
};
console.log(
  `El resultado de llamar a la funcion saludar es :`,
  saludar1("mel"),
  "Otra cosas por aqui",
);

/**
 * Escope (Alcance)
 */

let nombreGlobal = "Mel"; // Accesible desde cualquier lugar

function mostrarScope() {
  let nombreLocal = "Juan"; // Solo existe dentro de esta función
  console.log(`Global: ${nombreGlobal}`);
  console.log(`Local: ${nombreLocal}`);
}

mostrarScope();
// console.log(nombreLocal); // Esto daría error porque nombreLocal no existe fuera de la función
/**
 * Arrow function (Funciones de flecha)
 */

// Sintaxis estándar
const sumarFlecha = (a, b) => {
  return a + b;
};

// Retorno implícito (más corto, si solo hay una línea de código)
const multiplicarFlecha = (a, b) => a * b;

// Con un solo parámetro (se pueden omitir los paréntesis)
const saludarFlecha = (nombre) => `Hola ${nombre} desde una Arrow Function`;

console.log(sumarFlecha(10, 5));
console.log(multiplicarFlecha(4, 2));
console.log(saludarFlecha("Mel"));
