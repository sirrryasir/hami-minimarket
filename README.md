# 🛒 Hami MiniMarket: A Responsive E-Commerce Website

<p align="center">
  <img src="assets/preview.png" alt="Hami MiniMarket Preview" width="100%">
</p>

Hami MiniMarket is a modern, fully responsive e-commerce website built for a local grocery store. This project, developed as part of the HamiSkills Web Development Internship, demonstrates a complete front-end implementation of a mini-market, from a welcoming landing page to a functional order confirmation. It is designed to be user-friendly, intuitive, and visually appealing, providing a seamless shopping experience on any device.

## Project Preview

<p align="center">
  <img src="assets/preview.png" alt="Hami MiniMarket Preview" width="100%">
</p>

## 🚀 Live Demo

Experience the live version of the application here:

[**(Live Demo)**](https://sirrryasir.github.io/hami-minimarket/)

## ✨ Features

This project is packed with features that make for a complete and satisfying user experience.

### Product Discovery

- **Dynamic Product Grid**: Products are displayed in a clean, organized grid that is easy to browse.
- **Advanced Filtering**: Users can filter products by:
  - **Search**: Instantly find products by name.
  - **Category**: Filter by "Fruits" or "Vegetables".
  - **Price Range**: Adjust a slider to find products within a specific budget.
- **Real-Time Updates**: The product grid updates in real-time as filters are applied.

### Shopping Cart

- **Persistent Cart**: The shopping cart is saved in `LocalStorage`, so it persists even when the browser is refreshed or closed.
- **Add, Remove, and Update**: Users can easily add products to the cart, remove them, or update the quantity.
- **Automatic Calculation**: The cart total is automatically calculated as items are added, removed, or updated.
- **Clear Cart**: A "Clear Cart" button allows users to empty their cart with a single click.

### Ordering

- **Seamless Checkout Flow**: A "Proceed to Order" button in the cart takes the user to a summary page.
- **Order Summary**: The order page displays a complete breakdown of the items, subtotal, tax (5%), and the final total.
- **Order Confirmation**: Upon confirming the order, the cart is cleared, and a confirmation toast message is displayed.

## 🛠️ Technologies Used

This project was built using a combination of modern web technologies to create a fast, responsive, and interactive user experience.

- **HTML5**: Used for the semantic structure of the website, ensuring accessibility and a logical content flow.
- **CSS3**: Used for styling the website, with a focus on:
  - **Flexbox and Grid**: For creating complex, responsive layouts.
  - **Mobile-First Design**: Ensuring the website looks great on all devices, from mobile phones to desktops.
  - **Custom Properties**: For a consistent and easily maintainable color scheme.
- **JavaScript (ES6+)**: Powers all the dynamic and interactive features of the website, including:
  - **DOM Manipulation**: To dynamically render products, update the cart, and display order information.
  - **Event Handling**: To respond to user interactions like button clicks, form submissions, and filter changes.
  - **Modular Code**: The JavaScript is organized into separate files for better maintainability (`products.js`, `cart.js`, `order.js`, `storage.js`).
- **LocalStorage**: Used to store the user's shopping cart data, providing a persistent experience across sessions.

## 📂 File Structure

The project is organized into a clean and logical file structure:

```
hami-minimarket/
├── index.html          # The main landing page
├── products.html       # The page where users can browse and filter products
├── order.html          # The final order summary and confirmation page
├── README.md           # This file
├── assets/
│   ├── favicon.ico     # Favicon for the website
│   ├── logo.png        # The logo for Hami MiniMarket
│   └── preview.png     # A preview image of the project
├── css/
│   ├── style.css       # The main stylesheet for the website
│   └── order.css       # Additional styles for the order page
└── js/
    ├── script.js       # General JavaScript for the landing page
    ├── products.js     # Logic for filtering and displaying products
    ├── cart.js         # All shopping cart functionality
    ├── order.js        # Logic for the order summary page
    └── storage.js      # Helper functions for interacting with LocalStorage
```

## 🏃‍♀️ How to Run Locally

To get a local copy up and running, follow these simple steps.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SirrrYasir/hami-minimarket.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd hami-minimarket
   ```
3. **Open `index.html` in your browser**:
   You can do this by simply double-clicking the `index.html` file in your file explorer, or by using a tool like `Live Server` in your code editor for a better development experience.

## 🧠 Learning Summary

This project was a great learning experience, covering a wide range of front-end development concepts:

- **Responsive Design**: Building UIs that work seamlessly across all screen sizes using Flexbox and Grid.
- **Multi-Page Architecture**: Structuring a website with multiple pages and ensuring smooth navigation between them.
- **Modular JavaScript**: Writing clean, reusable, and maintainable JavaScript by breaking it down into smaller, focused files.
- **Dynamic Content**: Implementing dynamic features like product filtering and a shopping cart from scratch.
- **Data Persistence**: Using `LocalStorage` to manage and persist data on the client-side.
- **User Experience**: Enhancing the user experience with intuitive design, smooth animations, and clear feedback.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Developer Info

- **Developer**: Yaasir Hassan
- **Internship**: [HamiSkills Web Development Track](https://www.hamiskills.dev/)
- **Weeks Covered**: 1–3
- **Year**: 2025

---

> "Code with clarity, design with empathy."

---
