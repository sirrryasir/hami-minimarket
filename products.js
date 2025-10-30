// FILTERING
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const productList = document.getElementById("productList");
const products = Array.from(productList.getElementsByClassName("card"));

priceRange.addEventListener("input", () => {
  priceValue.textContent = `$${priceRange.value}`;
  filterProducts();
});

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseFloat(priceRange.value);

  products.forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();

    const category = product.getAttribute("data-category");

    const priceText = product
      .querySelector("p")
      .textContent.replace(/[^0-9.]/g, "");
    const price = parseFloat(priceText);

    const matchesSearch = name.includes(searchText);
    const matchesCategory =
      selectedCategory === "all" || selectedCategory === category;
    const matchesPrice = price <= maxPrice;

    product.style.display =
      matchesSearch && matchesCategory && matchesPrice ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// HAMBURGER SIDEBAR MENU
const menuBtn = document.getElementById("menuBtn");
const menuSidebar = document.getElementById("menuSidebar");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
  menuSidebar.classList.add("show");
  menuOverlay.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  menuSidebar.classList.remove("show");
  menuOverlay.classList.remove("show");
});

menuOverlay.addEventListener("click", () => {
  menuSidebar.classList.remove("show");
  menuOverlay.classList.remove("show");
});

document.querySelectorAll(".menu-sidebar a").forEach((link) =>
  link.addEventListener("click", () => {
    menuSidebar.classList.remove("show");
    menuOverlay.classList.remove("show");
  })
);

// BACK TO TOP
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// CART SYSTEM
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const clearCartBtn = document.getElementById("clearCart");
const cartIcon = document.querySelector(".cart-icon");
const toast = document.getElementById("toast");

let cart = JSON.parse(localStorage.getItem("hami_cart")) || [];

function saveCart() {
  localStorage.setItem("hami_cart", JSON.stringify(cart));
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
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
        <button class="decrease" data-index="${index}">-</button>
        <span>${item.qty}</span>
        <button class="increase" data-index="${index}">+</button>
        <button class="remove" data-index="${index}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;

  document.querySelectorAll(".increase").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      cart[i].qty++;
      updateCart();
      saveCart();
    })
  );

  document.querySelectorAll(".decrease").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      if (cart[i].qty > 1) cart[i].qty--;
      else cart.splice(i, 1);
      updateCart();
      saveCart();
    })
  );

  document.querySelectorAll(".remove").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      cart.splice(i, 1);
      updateCart();
      saveCart();
    })
  );
}

document.querySelectorAll(".add-cart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const name = card.querySelector("h3").textContent;
    const priceText = card
      .querySelector("p")
      .textContent.replace(/[^0-9.]/g, "");
    const price = parseFloat(priceText);
    const img = card.querySelector("img").src;

    const existing = cart.find((item) => item.name === name);
    if (existing) existing.qty++;
    else cart.push({ name, price, img, qty: 1 });

    updateCart();
    saveCart();
  });
});

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("show");
  overlay.classList.add("show");
});
closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("show");
  overlay.classList.remove("show");
});
overlay.addEventListener("click", () => {
  cartSidebar.classList.remove("show");
  overlay.classList.remove("show");
});

clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCart();
  saveCart();
  showToast("Cart cleared successfully!");
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Initialize
updateCart();
