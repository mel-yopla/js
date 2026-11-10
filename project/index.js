console.log("Hello from the Restaurant");

const user = {
  name: "Mel",
  age: 30,
  debt: 0,
};

const order = [];
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
