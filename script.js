let cart = JSON.parse(localStorage.getItem('cart')) || [];

function buyNow(name, image, price) {
    localStorage.setItem('selectedProduct', JSON.stringify({ name, image, price }));
    window.location.href = 'product.html';
}

function viewCart() {
    window.location.href = 'cart.html';
}

function addToCart() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function loadProductDetails() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price}`;
}

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `<img src="${item.image}" alt="${item.name}"><h3>${item.name}</h3><p>$${item.price}</p>`;
        cartItems.appendChild(div);
        total += item.price;
    });

    cartTotal.innerHTML = `<h3>Total: $${total}</h3>`;
}

if (window.location.pathname.endsWith('product.html')) {
    loadProductDetails();
}

if (window.location.pathname.endsWith('cart.html')) {
    loadCart();
}

