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
