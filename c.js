function addToCart(productName, productPrice) {
    // Create a new list item for the cart
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPrice}`;
    
    // Append the cart item to the cart items container
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.appendChild(cartItem);
}

// Add click event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Extract product details from the nearest product element
        const productElement = event.target.closest('.pro');
        const productName = productElement.querySelector('h5').textContent;
        const productPrice = productElement.querySelector('h4').textContent.slice(1); // Remove "$" sign
        
        // Add the product to the cart
        addToCart(productName, productPrice);
    });
});