document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    function renderCart() {
        const cartItemsContainer = document.querySelector(".cart-items");
        cartItemsContainer.innerHTML = ""; 
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
        } else {
            cart.forEach((item, index) => {
                const itemTotal = parseInt(item.price.replace("k", "")) * item.quantity; 
                totalPrice += itemTotal;

                const cartItem = document.createElement("div");
                cartItem.className = "cart-item";
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="item-details">
                        <p class="item-name">${item.name}</p>
                        <p class="price">Price: ${item.price}</p>
                        <p>Subtotal: ${itemTotal}k</p>
                    </div>
                    <div class="quantity">
                        <button class="btn-qty increase" data-index="${index}">+</button>
                        <span>${item.quantity}</span>
                        <button class="btn-qty decrease" data-index="${index}">-</button>
                    </div>
                    <button class="remove-item" data-index="${index}">❌</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        // Tampilkan total harga
        const totalPriceContainer = document.querySelector(".total-price");
        totalPriceContainer.textContent = `Total: ${totalPrice}k`;
    }

    // Event Listener: Tambah dan Kurangi Kuantitas
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase")) {
            const index = e.target.dataset.index;
            cart[index].quantity += 1;
        } else if (e.target.classList.contains("decrease")) {
            const index = e.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                alert("Minimum quantity is 1");
            }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    });

    // Event Listener: Hapus Produk dari Keranjang
    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Render keranjang saat halaman dimuat
    renderCart();
});
