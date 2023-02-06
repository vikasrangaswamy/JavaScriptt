const cartContainer = document.createElement("button")
cartContainer.classList.add("cartContainer")
let cart = [];

function addToCart(product) {
  let productIndex = cart.findIndex(p => p.id === product.id);
  if (productIndex === -1) {
    cart.push({...product, count: 1});
  } else {
    cart[productIndex].count++;
  }
  updateCartCount();
}

function updateCartCount() {
  let itemCount = cart.reduce((total, product) => total + product.count, 0);
  cartContainer.textContent = `Cart (${itemCount})`;
}

cartContainer.addEventListener("click", () => {
  console.log("cart items = " , cart) 
});

updateCartCount();


export {cartContainer, addToCart}