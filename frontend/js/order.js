import { loadCart, saveCart } from "./storage.js";

const orderItems = document.getElementById("orderItems");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const confirmBtn = document.getElementById("confirmOrder");
const toast = document.getElementById("toast");

let cart = loadCart();

function renderOrder() {
  orderItems.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    orderItems.innerHTML = "<p>Your cart is empty.</p>";
    subtotalEl.textContent = "0.00";
    taxEl.textContent = "0.00";
    totalEl.textContent = "0.00";
    return;
  }

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.qty} × $${item.price.toFixed(2)}</p>
      </div>
      <strong>$${(item.qty * item.price).toFixed(2)}</strong>
    `;
    orderItems.appendChild(div);
    subtotal += item.qty * item.price;
  });

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  totalEl.textContent = total.toFixed(2);
}

confirmBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  showToast("✅ Order confirmed successfully!");
  cart = [];
  saveCart(cart);
  renderOrder();
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

renderOrder();
