console.log("Hello from the Restaurant");

const user = {
  name: "Mel",
  age: 30,
  debt: 0,
};

const order = [];

let totalSales = 0;

const showMenu = () => {
  console.log(`CODE - PRODUCT - PRICE`);
  products.forEach((product) => {
    console.log(`${product.code} - ${product.name} - $${product.price}`);
  });
};

const orderProduct = (code) => {
  if (!code) {
    return "Please enter a valid code";
  }
  const foundProduct = products.find((product) => {
    return product.code === code;
  });

  if (!foundProduct) {
    return "Product not found";
  }
  order.push(foundProduct);
  console.log("Your product has been added to your order. Your order is: ");
  return viewOrder();
};

const viewOrder = () => order;

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

const finalizeOrder = () => {
  const total = calculateTotal();
  user.debt += total;

  //Vaciamos el pedido para la próxima vez
  order.length = 0;
  console.log(
    `Order finalized! ${user.name}, your total debt is now: $${user.debt}`,
  );
  return user.debt;
};

const payOrder = (countMoney) => {
  if (countMoney < user.debt) {
    console.log(
      `Insufficient funds. You are still short $${user.debt - countMoney}`,
    );
    return false;
  } else if (countMoney === user.debt) {
    totalSales += user.debt;
    user.debt = 0;
    console.log("Order paid in full. Thank you!");
    return true;
  } else {
    const change = countMoney - user.debt;
    totalSales += user.debt;
    user.debt = 0;
    console.log(`Order paid! Your change is $${change}.`);
    return true;
  }
};
