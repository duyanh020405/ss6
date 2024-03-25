function getPriceByName(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            return products[i].money;
        }
    }
    return null; // Return null if the product name is not found
}

// Function to display the shopping cart
function displayShoppingCart() {
    // Clear previous content
    shoppingCartElement.innerHTML = "";

    // Iterate through localStorage items and display them in the shopping cart
    for (let i = 0; i < localStorage.length; i++) {
        const productId = localStorage.key(i);
        const productName = localStorage.getItem(productId);
        const productPrice = getPriceByName(productName);

        // Create a new element to display the product
        const productElement = document.createElement("div");
        productElement.textContent = `ID: ${productId}, Name: ${productName}, Price: ${productPrice}`;

        // Append the product element to the shopping cart
        shoppingCartElement.appendChild(productElement);
    }
}