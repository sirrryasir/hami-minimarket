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

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
  e.target.reset();
});

const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  })
);
