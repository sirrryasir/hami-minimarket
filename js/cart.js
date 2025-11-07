import { loadCart, saveCart } from "./storage.js";

export let cart = loadCart();

export function updateCartUI() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  // Haddii cartItems aan la helin, update count oo kaliya
  if (!cartItemsContainer) {
    let count = 0;
    cart.forEach((item) => (count += item.qty));
    if (cartCount) cartCount.textContent = count;
    saveCart(cart);
    return;
  }

  cartItemsContainer.innerHTML = "";
  let total = 0,
    count = 0;

  cart.forEach((item, i) => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <div class="cart-item-controls">
        <button class="decrease" data-index="${i}">-</button>
        <span>${item.qty}</span>
        <button class="increase" data-index="${i}">+</button>
        <button class="remove" data-index="${i}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
  if (cartCount) cartCount.textContent = count;

  saveCart(cart);
  attachListeners();
}

function attachListeners() {
  document.querySelectorAll(".increase").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      cart[i].qty++;
      updateCartUI();
    })
  );

  document.querySelectorAll(".decrease").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      if (cart[i].qty > 1) cart[i].qty--;
      else cart.splice(i, 1);
      updateCartUI();
    })
  );

  document.querySelectorAll(".remove").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      cart.splice(i, 1);
      updateCartUI();
    })
  );

  // Clear cart
  const clearBtn = document.getElementById("clearCart");
  if (clearBtn) {
    clearBtn.onclick = () => {
      cart = [];
      updateCartUI();
    };
  }

  // Proceed to order
  const proceedBtn = document.getElementById("proceedOrder");
  if (proceedBtn) {
    proceedBtn.onclick = () => {
      if (cart.length === 0) return;
      window.location.href = "order.html";
    };
  }
}

// Add to cart function
export function addToCart(name, price, img) {
  const existing = cart.find((item) => item.name === name);
  if (existing) existing.qty++;
  else cart.push({ name, price, img, qty: 1 });
  updateCartUI();
}

// Sidebar open/close
const cartIcon = document.querySelector(".cart-icon");
const cartSidebar = document.getElementById("cartSidebar");
const closeCartBtn = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

if (cartIcon && cartSidebar && overlay && closeCartBtn) {
  cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("show");
    overlay.classList.add("show");
  });

  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
    overlay.classList.remove("show");
  });
}
