/**
 * Funciones Flecha =>
 */
// const sumar = function (a, b) {
//   return a + b;
// };
const sumar = (a, b) => {
  return a + b;
};

const restar = (a, b) => {
  return a - b;
};

console.log(sumar(10, 5));
console.log(restar(5, 1));

/**
 * 1. Retorno Implícito (Más conciso)
 * No necesita llaves {} ni la palabra 'return'
 */
const multiplicar = (a, b) => a * b;
console.log(multiplicar(10, 2));

/**
 * 2. Un solo parámetro
 * No necesita paréntesis ()
 */
const duplicar = (n) => n * 2;
console.log(duplicar(50));

/**
 * 3. Sin parámetros
 * Se deben usar paréntesis vacíos
 */
const saludar = () => console.log("Hola Mundo");
saludar();

/**
 * 4. Retornar un objeto
 * Se deben envolver las llaves del objeto en paréntesis ({})
 * para que JS no las confunda con el cuerpo de la función
 */
const crearUsuario = (nombre, edad) => ({ nombre, edad });
console.log(crearUsuario("Mel", 30));

/**
 * 5. Aplicación real: Métodos de Array
 */
const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map((n) => n * n);
console.log(cuadrados); // [1, 4, 9, 16]
