document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const products = [
      { id: 1, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 2, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 3, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 4, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 5, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 6, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 7, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 8, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 9, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 10, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 11, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
      { id: 12, name: "Nasi Ayam", price: "170k", image: "nasiayamkrisipi.png", rating: 0 },
  ];

  products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <div class="price">${product.price}</div>
          <div class="star" id="rating-${product.id}"></div>
          <button class="add-to-cart" data-id="${product.id}">Add To Cart</button>
      `;
      productList.appendChild(productCard);

      const starContainer = productCard.querySelector(`#rating-${product.id}`);
      for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.className = "fa-solid fa-star";
          star.addEventListener("mouseover", () => highlightStars(i + 1, starContainer));
          star.addEventListener("click", () => setRating(product.id, i + 1));
          star.addEventListener("mouseleave", () => restoreRating(product.id, starContainer));
          starContainer.appendChild(star);
      }

      const addToCartButton = productCard.querySelector(".add-to-cart");
      addToCartButton.addEventListener("click", () => {
          const productId = product.id;
          const existingProduct = cart.find((item) => item.id === productId);
          if (existingProduct) {
              existingProduct.quantity += 1;
          } else {
              cart.push({ ...product, quantity: 1 });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${product.name} added to cart!`);
      });
  });

  const ratings = {};

  function highlightStars(count, container) {
      const stars = container.querySelectorAll("i");
      stars.forEach((star, index) => {
          star.classList.toggle("active", index < count);
      });
  }

  function setRating(productId, rating) {
      ratings[productId] = rating;
      const container = document.querySelector(`#rating-${productId}`);
      highlightStars(rating, container);
  }

  function restoreRating(productId, container) {
      const rating = ratings[productId] || 0;
      highlightStars(rating, container);
  }
});
