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

// Task 3

