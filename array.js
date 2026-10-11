const friends = ["mel", "antonio", "Erick", "Daniel"];
console.log(friends);

// agregar elementos
let dato = friends.push("Luis");
console.log(friends); // devuelve el array nuevo
console.log(dato); // devuelve el nuevo tamaño de mi array

/**
 * Quitar elementos de mi array
 * mettodo pop
 */

let dato2 = friends.pop();

console.log(friends);
console.log(dato2);

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
