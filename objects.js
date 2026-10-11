/**
 * Objetos
 */

let alumno = {
  nombre: "Mel",
  edad: 30,
  suscriptor: true,
  ciudad: "Lima",
};

console.log(alumno.ciudad);
console.log(alumno["edad"]);

let valores = Object.values(alumno);
console.log(valores);

let atributos = Object.keys(alumno);
console.log(atributos);
