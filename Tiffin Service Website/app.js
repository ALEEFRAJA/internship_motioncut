// Variables to store selected items and total price
let selectedItems = [];
let totalPrice = 0;

// Function to show the home page
function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('order-page').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
}

// Function to show the menu page
function showMenu() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'block';
    document.getElementById('order-page').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
}

// Function to show the order page
function showOrder() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('order-page').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';

    // Display the list of selected items and total price
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear the previous list
    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        orderList.appendChild(li);
    });

    // Display the total price
    document.getElementById('total-price').textContent = `Total: ₹${totalPrice}`;
}

// Function to add items to the cart and update the order
function addToCart(itemName, itemPrice) {
    selectedItems.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    alert(`${itemName} added to your order. Total: ₹${totalPrice}`);
}

// Function to show login form
function showLoginForm() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('order-page').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

// Function to show sign-up form
function showSignUpForm() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('order-page').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Initialize to show the home page when the page loads
window.onload = showHome;
