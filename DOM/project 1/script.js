document.addEventListener("DOMContentLoaded", () => {
  // Select all necessary elements in the document
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.getElementById("total-price");

  // Update total price initially
  updateTotalPrice();

  cartItems.forEach((item) => {
    // Get elements for quantity, delete, and like buttons within each item
    const quantityElement = item.querySelector(".quantity");
    const priceElement = item.querySelector(".price");
    const addButton = item.querySelector(".add-button");
    const subtractButton = item.querySelector(".subtract-button");
    const deleteButton = item.querySelector(".delete-button");
    const likeButton = item.querySelector(".like-button");

    // Event listener for adding quantity
    addButton.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      quantity += 1;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    });

    // Event listener for subtracting quantity
    subtractButton.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) { // Prevent negative or zero quantities
        quantity -= 1;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    });

    // Event listener for deleting item from cart
    deleteButton.addEventListener("click", () => {
      item.remove();
      updateTotalPrice();
    });

    // Event listener for liking/unliking item
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("liked"); // Assuming CSS changes color when "liked" class is added
    });
  });

  // Function to calculate and update the total price based on current quantities and prices
  function updateTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const pricePerItem = parseFloat(item.querySelector(".price").dataset.price); // Assuming price is in data attribute
      totalPrice += quantity * pricePerItem;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2); // Display total price with 2 decimal places
  }
});
