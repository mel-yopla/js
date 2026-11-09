console.log("Hola! desde el Restaurant");

const usuario = {
  nombre: "Mel",
  edad: 30,
  deuda: 0,
};

const pedido = [];
const showMenu = () => {
  console.log(`CÓDIGO - NOMBRE PRODUCTO - COSTO`);
  productos.forEach((producto) => {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`);
  });
};

const pedirProducto = (cod) => {
  if (!cod) {
    return "Ingrese un codigo válido";
  }
  const productoEncontrado = productos.find((producto) => {
    return producto.codigo === cod;
  });

  if (!productoEncontrado) {
    return "El productono no ha sido encontrado";
  }
  pedido.push(productoEncontrado);
  console.log("Su producto ha sido agregado a su pedido. Su pedido es:");
  return pedido;
};
