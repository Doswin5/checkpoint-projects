// Product class to define properties of a product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class to store properties for each item in the cart
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of this item (product price * quantity)
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class to handle cart operations
class ShoppingCart {
  constructor() {
    // Initialize an empty array to store ShoppingCartItem instances
    this.items = [];
  }

  // Method to get the total number of items in the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to add an item to the cart
  addItem(product, quantity = 1) {
    // Check if the product is already in the cart
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // If item already in cart, just increase the quantity
      existingItem.quantity += quantity;
    } else {
      // If item not in cart, add a new ShoppingCartItem instance
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Method to remove an item from the cart by product ID
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Method to display all items in the cart
  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
    } else {
      console.log("Items in Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
      });
      console.log(`Total Cart Price: $${this.getTotalCartPrice().toFixed(2)}`);
    }
  }

  // Method to calculate the total price for all items in the cart
  getTotalCartPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

// --- Testing the classes and their methods ---

// Step 1: Create some product instances
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 150);

// Step 2: Create a shopping cart instance
const cart = new ShoppingCart();

// Step 3: Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2); // Adds 2 phones
cart.addItem(product3, 3); // Adds 3 headphones

// Step 4: Display the cart contents
cart.displayCart();

// Step 5: Remove an item from the cart (e.g., product with id 2 - "Phone")
cart.removeItem(2);

// Step 6: Display the cart contents again after removal
cart.displayCart();
