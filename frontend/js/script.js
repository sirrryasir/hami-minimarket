import { apiGet } from "./config.js";

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

const heroBtn = document.getElementById("heroBtn");
heroBtn.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

const productBtn = document.getElementById("productBtn");
productBtn.addEventListener("click", () => {
  window.location.href = "products.html";
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
  e.target.reset();
});

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

// Load categories into filter

const topList = document.getElementById("topProducts");
async function loadTopProducts() {
  try {
    const products = await apiGet("/api/products");
    const topProducts = products.slice(0, 8);

    topList.innerHTML = topProducts
      .map(
        (product) => `
      <div class="card" data-category="${product.category}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
      </div>
    `
      )
      .join("");
  } catch (err) {
    console.error("Error loading top products:", err);
    topList.innerHTML = "<p>Failed to load top products.</p>";
  }
}

loadTopProducts();
