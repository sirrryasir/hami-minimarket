import { apiGet } from "./config.js";
import { addToCart, updateCartUI } from "./cart.js";

updateCartUI();

const list = document.getElementById("productList");
const search = document.getElementById("searchInput");
const cat = document.getElementById("categoryFilter");
const price = document.getElementById("priceRange");
const priceLabel = document.getElementById("priceValue");
const loading = document.getElementById("loading");

let products = [];

async function loadProducts() {
  try {
    loading.style.display = "block";
    products = await apiGet("/api/products");
  } catch (error) {
    list.innerHTML = "<p>Failed to load products</p>";
  } finally {
    loading.style.display = "none";

    render(products);
  }
}

function render(data) {
  list.innerHTML = data
    .map(
      (p) => `
    <div class="card" data-category="${p.category}">
      <img src="${p.image}" loading="lazy">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button class="add-cart-btn" data-name="${p.name}">Add to Cart</button>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".add-cart-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const item = products.find((p) => p.name === btn.dataset.name);
      addToCart(item.name, item.price, item.image);
      btn.textContent = "Added to Cart!";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.disabled = false;
      }, 1500);
    })
  );
}

function filterProducts() {
  const text = search.value.toLowerCase();
  const category = cat.value;
  const max = Number(price.value);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(text) &&
      (category === "all" || p.category === category) &&
      p.price <= max
  );

  render(filtered);
}

search.oninput = filterProducts;
cat.onchange = filterProducts;
price.oninput = () => {
  priceLabel.textContent = "$" + price.value;
  filterProducts();
};

loadProducts();
