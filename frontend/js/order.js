import { loadCart, saveCart } from "./storage.js";
import { apiPost } from "./config.js";

const itemsEl = document.getElementById("orderItems");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const confirmBtn = document.getElementById("confirmOrder");
const toast = document.getElementById("toast");

let cart = loadCart();

function renderOrder() {
  itemsEl.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;
    itemsEl.innerHTML += `
      <div class="order-item">
        <img src="${item.img}">
        <h4>${item.name}</h4>
        <p>${item.qty} x $${item.price}</p>
        <strong>$${(item.qty * item.price).toFixed(2)}</strong>
      </div>
    `;
  });

  const tax = subtotal * 0.05;
  const totalPrice = subtotal + tax;

  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  totalEl.textContent = totalPrice.toFixed(2);
}

confirmBtn.addEventListener("click", async () => {
  if (!cart.length) return showToast("Cart is empty.");

  try {
    await apiPost("/api/orders", {
      items: cart,
      totalAmount: Number(totalEl.textContent),
    });

    showToast("Order saved successfully!");
    cart = [];
    saveCart(cart);
    renderOrder();
  } catch (err) {
    showToast("Failed to save order.");
    return;
  }
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

renderOrder();
