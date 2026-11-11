console.log("--- 🍴 Welcome to the Restaurant System 🍴 ---");

const user = {
  name: "Mel",
  age: 30,
  debt: 0,
};

const order = [];

let totalSales = 0;

/**
 * Muestra el menú en la consola
 */
// const showMenu = () => {
//   console.log(`CODE - PRODUCT - PRICE`);
//   products.forEach((product) => {
//     console.log(`${product.code} - ${product.name} - $${product.price}`);
//   });
// };
const showMenu = () => {
  console.log(`\n--- MENU ---`);
  // console.table es excelente para visualizar arrays de objetos
  console.table(products, ["code", "name", "price"]);
};

/**
 * Agrega productos al pedido
 */
const orderProduct = (code) => {
  if (!code) {
    return console.warn("Please enter a valid code.");
  }
  const foundProduct = products.find((product) => {
    return product.code === code;
  });

  if (!foundProduct) {
    return console.error(`Product with code "${code}" not found.`);
  }
  order.push(foundProduct);
  console.log(`✅ ${foundProduct.name} added to your order.`);
  return viewOrder();
};

const viewOrder = () => {
  if (order.length === 0) return "Your order is currently empty.";
  return order;
};

const calculateTotal = () => {
  const total = order.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);
  return total;
};

const showTotal = () => {
  const total = calculateTotal();
  console.log(`The total cost of your order is: $${total}`);
  return total;
};

/**
 * Finaliza el pedido evitando órdenes vacías
 */
const finalizeOrder = () => {
  const total = calculateTotal();

  if (total === 0) return console.warn("You cannot finalize an empty order.");

  user.debt += total;

  //Vaciamos el pedido para la próxima vez
  order.length = 0;
  console.log(`\n🔔 Order finalized!`);
  console.log(`${user.name}, your current debt is: $${user.debt}`);
  return user.debt;
};

/**
 * Procesa el pago con validaciones de tipo y lógica de deuda
 */
const payOrder = (amount) => {
  if (typeof amount !== "number" || amount <= 0) {
    return console.error(
      "Invalid payment amount. Please provide a positive number.",
    );
  }

  if (user.debt === 0) {
    return console.log("You don't have any pending debt to pay.");
  }

  if (amount < user.debt) {
    console.log(
      `❌ Insufficient funds. You still owe $${(user.debt - amount).toFixed(2)}`,
    );
    return false;
  }

  // Lógica de pago exitoso
  const change = amount - user.debt;
  totalSales += user.debt;
  user.debt = 0;

  console.log(`\n💰 Payment successful!`);
  if (change > 0) console.log(`Your change is: $${change.toFixed(2)}`);
  console.log("Thank you for your visit!");

  return true;
};
