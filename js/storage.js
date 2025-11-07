export function loadCart() {
  return JSON.parse(localStorage.getItem("hami_cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("hami_cart", JSON.stringify(cart));
}
