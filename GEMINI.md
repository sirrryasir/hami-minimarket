# GEMINI.md

## Project Overview

This project is a simple, responsive landing page for "Hami MiniMarket," a fictional community store specializing in fresh fruits and vegetables. It is a static website built with vanilla HTML, CSS, and JavaScript.

The project consists of two main pages:
- **`index.html`**: The main landing page, featuring a hero section, a preview of products, an "About Us" section, and a contact form.
- **`products.html`**: A dedicated page that displays all available products with filtering and cart functionality.

The website is styled with a mobile-first approach and uses Flexbox and Grid for layouts. Interactivity is provided through vanilla JavaScript, including a responsive hamburger menu, a "back to top" button, and a fully functional shopping cart that persists items in `localStorage`.

## Building and Running

This is a static website with no build process. To run the project, simply open the `index.html` file in a web browser.

```bash
# On most systems, you can open the file directly
open index.html
```

## Development Conventions

*   **Structure**:
    *   `index.html`: Main landing page.
    *   `products.html`: Product listing and filtering page.
    *   `style.css`: Global styles for the entire website.
    *   `script.js`: JavaScript for the main landing page (`index.html`).
    *   `products.js`: JavaScript for the products page, including filtering, search, and the shopping cart system.
    *   `assets/`: Contains static assets like the logo and favicon.
*   **Styling**:
    *   The project uses a custom CSS file (`style.css`) with a mobile-first design philosophy.
    *   Responsive breakpoints are handled using `@media (min-width: 769px)`.
    *   CSS variables are defined in the `:root` for consistent theming (colors, shadows, etc.).
*   **JavaScript**:
    *   All JavaScript is written in vanilla JS (ES6+).
    *   The cart functionality in `products.js` uses the browser's `localStorage` to persist the cart's state between sessions (`hami_cart` key).
    *   DOM manipulation is used to handle UI updates, such as filtering products and updating the cart.
*   **Dependencies**: The project uses Font Awesome for icons, included via a CDN link in the HTML `<head>`.
