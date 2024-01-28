const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});




const products = [
    { id: 1, name: 'Product 1', price: 20.00 },
    { id: 2, name: 'Product 2', price: 30.00 },
    { id: 3, name: 'Product 3', price: 15.00 }
];

const cartItems = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.name} - $${product.price.toFixed(2)} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(listItem);
    });
}

function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsList.innerHTML = '';
    
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cartItems.push({ id: product.id, name: product.name, price: product.price });
    displayCart();
}

function checkout() {
    // Add your checkout logic here (e.g., send cartItems to the server, process payment, etc.)
    alert('Checkout button clicked. Implement your checkout logic here.');
}

// Initial display
displayProducts();
displayCart();