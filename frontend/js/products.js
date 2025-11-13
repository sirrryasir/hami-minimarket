import { addToCart, updateCartUI } from "./cart.js";

// Filtering
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const productList = document.getElementById("productList");
const products = Array.from(productList.getElementsByClassName("card"));

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseFloat(priceRange.value);

  products.forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    const category = product.dataset.category;
    const price = parseFloat(
      product.querySelector("p").textContent.replace(/[^0-9.]/g, "")
    );
    const matchesSearch = name.includes(searchText);
    const matchesCategory =
      selectedCategory === "all" || selectedCategory === category;
    const matchesPrice = price <= maxPrice;
    product.style.display =
      matchesSearch && matchesCategory && matchesPrice ? "block" : "none";
  });
}

priceRange.addEventListener("input", () => {
  priceValue.textContent = `$${priceRange.value}`;
  filterProducts();
});
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Add to cart buttons
document.querySelectorAll(".add-cart-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const name = card.querySelector("h3").textContent;
    const price = parseFloat(
      card.querySelector("p").textContent.replace(/[^0-9.]/g, "")
    );
    const img = card.querySelector("img").src;
    addToCart(name, price, img);
  })
);

// Initialize cart UI
updateCartUI();
