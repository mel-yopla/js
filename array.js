const friends = ["mel", "antonio", "Erick", "Daniel"];
console.log("ärray original: ", friends);

// agregar elementos
let dato = friends.push("Luis");
console.log("Aplicando .push al array: ", friends); // devuelve el array nuevo
console.log("Lo que devuelve el metodo .push: ", dato); // devuelve el nuevo tamaño de mi array

/**
 * Quitar elementos de mi array
 * mettodo pop
 */

let dato2 = friends.pop();

console.log("Aplicando .pop al array: ", friends);
console.log("Lo que retorna el metodo .pop: ", dato2);

/**
 * No modifica el array original
 * slice
 */
// partir nuestro array en dos arrays
// El array original no cambia

let dato3 = friends.slice(0, 2);
console.log(friends);
console.log(dato3);

/**
 * Foreach
 * La finalidad del foreEach es hacer algo con los elementos
 */

let dato4 = friends.forEach((name, index) => {
  // return friends.push(index);
  console.log(` Hola ${name}`);
  return index; // retorna undefined, esta diseñado para no devolver nada.
});
console.log(friends);
console.log(dato4);

/**
 * map
 */

let dato5 = friends.map((name, index) => {
  return `hola ${name}`;
});
console.log(friends);
console.log(dato5);

/**
 * Filter
 */

let numeros = [10, 20, 30, 55, 68, 66, 89, 12, 45, 68, 254];

/**
 * 1. Agregar/Quitar al INICIO (Mutan el array)
 */
friends.unshift("Maria"); // Agrega al inicio
let primero = friends.shift(); // Quita el primero
console.log("Después de shift:", friends);

/**
 * 2. Buscar un elemento específico
 * find: devuelve el objeto/valor, no un array
 */
const busqueda = friends.find((name) => name === "Erick");
console.log("Encontrado:", busqueda);

/**
 * 3. Comprobar existencia
 * includes: devuelve true/false
 */
const tieneMel = friends.includes("mel");
console.log("¿Está Mel?:", tieneMel);

/**
 * 4. Mejora de Filter (Sintaxis Pro)
 * Usamos retorno implícito para que sea una sola línea
 */
const mayoresDe30 = numeros.filter((num) => num > 30);
console.log("Mayores de 30:", mayoresDe30);

/**
 * 5. Reduce (Para cálculos)
 * Sumar todos los números del array
 */
const totalSuma = numeros.reduce((acumulador, actual) => {
  return acumulador + actual;
}, 0); // El 0 es el valor inicial
console.log("Suma total de números:", totalSuma);

/**
 * 6. Concatenar Arrays
 */
const otrosAmigos = ["Pedro", "Juan"];
const todos = [...friends, ...otrosAmigos]; // Spread operator (forma moderna)
console.log("Lista completa:", todos);
let nuevoArray = [];
numeros.map((num) => {
  if (num > 30) {
    nuevoArray.push(num);
  }
});

console.log(nuevoArray);
console.log(numeros);

// Filer hace esto de forma unida
let nuevo = numeros.filter((num, index) => {
  return num > 30;
});

// la comparación nos debe entregar true o false.
console.log(nuevo);
console.log(numeros);
