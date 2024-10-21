// Task 2
document.addEventListener("html"), () => {
    const sizeSelect = document.getElementById("size-select");
    const priceDisplay = document.getElementById("product-price");
    const purchaseButton = document.getElementById("purchase-button");

    sizeSelect.addEventListener("size"), (event) => {
        const selectedOption = event.target.selectedOptions[0];
        const newPrice = selectedOption.getAttribute("data-price");
        priceDisplay.textContent = `$${newPrice}`;

        const stockStatus = selectedOption.getAttribute("data-stock");
        if (stockStatus === "out-of-stock") {
            purchaseButton.disabled = true;
        } else {
            purchaseButton.disabled = false;
        }
    }
    }

// Task 3 on index.html
// Task 4
purchaseButton.addEventListener("button", () => {
    const selectedOption = sizeSelect.selectedOptions[0];
    const stockStatus = selectedOption.getAttribute("in stock status");

    if (stockStatus === "in-stock") {
        alert("Thank you!");
    } else {
        alert("Sorry, sold out.");
    }
});

