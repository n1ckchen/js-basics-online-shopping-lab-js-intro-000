var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({[item] : Math.floor(Math.random()*((100 -1) +1) + 1)});
      console.log(`${item} has been added to your cart.`);
      return cart;
 addToCart("bananas");
 addToCart("egg");
 addToCart("strawberries");

 return getCart();
 }
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
