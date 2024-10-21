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

// Task 5
const productList = document.getElementById("product list");
const addProductButton = document.getElementById("add product button");

addProductButton.addEventListener("click", () => {
    const newProductName = document.getElementById("new product name").value;
    const newProductPrice = document.getElementById("new product price").value;
    const newProductSize = document.getElementById("new product size").value;

    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<h4>${newProductName}</h4><p>$${newProductPrice}</p><button>Purchase</button>`;
    productList.appendChild(productDiv);

    // Add event listener for purchase button for new product
    productDiv.querySelector("button").addEventListener("click", () => {
        alert("Thank you!");
    });
});