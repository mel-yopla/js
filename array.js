const friends = ["mel", "antonio", "Erick", "Daniel"];
console.log("ärray original: ", friends);

// agregar elementos

console.log("------Usando .push()------");
let dato = friends.push("Luis");
console.log("Aplicando .push al array: ", friends); // devuelve el array nuevo
console.log("Lo que devuelve el metodo .push: ", dato); // devuelve el nuevo tamaño de mi array

/**
 * Quitar elementos de mi array
 * mettodo pop
 */

console.log("------Usando .pop()------");
let dato2 = friends.pop();

console.log("Aplicando .pop al array: ", friends);
console.log("Lo que retorna el metodo .pop: ", dato2);

/**
 * No modifica el array original
 * slice
 */
// partir nuestro array en dos arrays
// El array original no cambia

console.log("------Usando .slice()------");
let dato3 = friends.slice(0, 2);
console.log("Array original", friends);
console.log("Aplicando el .slice(0,2)", dato3);

/**
 * Foreach
 * La finalidad del foreEach es hacer algo con los elementos
 */

console.log("------Usando .forEach()------");
let dato4 = friends.forEach((name, index) => {
  // return friends.push(index);

  console.log(` Hola ${name}`);
  return index; // retorna undefined, esta diseñado para no devolver nada.
});
console.log("Array original: ", friends);
console.log("Lo que me devolveria .forEach(): ", dato4);

/**
 * map
 */

console.log("------Usando .map()------");
let dato5 = friends.map((name, index) => {
  return `hola ${name}`;
});
console.log("Array original: ", friends);
console.log("Lo que me devolveria .map(): ", dato5);

/**
 * 1. Agregar/Quitar al INICIO (Mutan el array)
 */
console.log("------Usando .unshift()------");
friends.unshift("Maria"); // Agrega al inicio
console.log("Después de unshift:", friends);

console.log("------Usando .shift()------");
let primero = friends.shift(); // Quita el primero
console.log("Después de shift:", friends);

/**
 * 2. Buscar un elemento específico
 * find: devuelve el objeto/valor, no un array
 */
console.log("------Usando .find()------");
const busqueda = friends.find((name) => name === "Erick");
console.log("Encontrado:", busqueda);

/**
 * 3. Comprobar existencia
 * includes: devuelve true/false
 */
console.log("------Usando .includes()------");
const tieneMel = friends.includes("mel");
console.log("¿Está Mel?:", tieneMel);

/**
 * Filter
 */

let numeros = [10, 20, 30, 55, 68, 66, 89, 12, 45, 68, 254];
console.log("Array de numeros: ", numeros);

/**
 * 4. Mejora de Filter (Sintaxis Pro)
 * Usamos retorno implícito para que sea una sola línea
 */
console.log("------Usando .filter()------");
const mayoresDe30 = numeros.filter((num) => num > 30);
console.log("Mayores de 30:", mayoresDe30);

/**
 * 5. Reduce (Para cálculos)
 * Sumar todos los números del array
 */
console.log("------Usando .reduce()------");
const totalSuma = numeros.reduce((acumulador, actual) => {
  return acumulador + actual;
}, 0); // El 0 es el valor inicial
console.log("Suma total de números:", totalSuma);

/**
 * 6. Concatenar Arrays
 */
console.log("------Concatenando Arrays------");
console.log("Array original: ", friends);
const otrosAmigos = ["Pedro", "Juan"];
console.log("Nuevos amigos: ", otrosAmigos);
const todos = [...friends, ...otrosAmigos]; // Spread operator (forma moderna)
console.log("Lista completa:", todos);

console.log("------Comparativa .map() vs .filter()------");
// Si queremos filtrar elementos, .map() no es la herramienta ideal porque siempre devuelve un array de la misma longitud.
// Ejemplo con .map():
console.log("Array de numeros: ", numeros);
let nuevoArray = [];
console.log("Array nuevo: ", nuevoArray);
numeros.map((num) => {
  if (num > 30) {
    nuevoArray.push(num);
  }
});

console.log(
  "Despues de aplicar .map() al array original, agregamos todos los que son > 30 en el nuevo array: nuevoArray",
  nuevoArray,
);
console.log("Despues de aplicar .map() al array original: ", numeros);

// Filer hace esto de forma unida
console.log(".filter() hace esto de forma unida");
console.log("Array de numeros: ", numeros);
let nuevo = numeros.filter((num, index) => {
  return num > 30;
});

// la comparación nos debe entregar true o false.
console.log("El nuevo array queda asi", nuevo);
console.log("El array original queda asi: ", numeros);
