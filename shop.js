// =============================================================
// Snoot & Co. - SHOP BUILDER
// This program reads the list in products.js and builds one
// product card for each item on the page.
// You normally don't need to edit this file.
// =============================================================

// Find the empty box on the page where products should go.
const grid = document.getElementById("product-grid");

// For each product in the list, build a card.
products.forEach(function (product) {
  const card = document.createElement("article");
  card.className = "product-card";

  // Picture: use the real photo if there is one, otherwise the emoji placeholder.
  const picture = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<span class="placeholder" aria-hidden="true">${product.emoji}</span>`;

  // Badge: only show it if one is set.
  const badge = product.badge ? `<span class="badge">${product.badge}</span>` : "";

  // Button: real Buy link if we have one, otherwise a grey "Coming soon".
  const button = product.buyLink
    ? `<a class="button" href="${product.buyLink}">Buy now</a>`
    : `<span class="button button-disabled">Coming soon</span>`;

  card.innerHTML = `
    <div class="product-image">${badge}${picture}</div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-bottom">
        <span class="price">$${product.price}</span>
        ${button}
      </div>
    </div>
  `;

  grid.appendChild(card);
});
