const products = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 200,
    image: "cbiryani.jpg",
  },
  {
    id: 2,
    name: "Mutton Biryani",
    price: 300,
    image: "mbiryani.jpg",
  },
  {
    id: 3,
    name: "Fish Curry",
    price: 350,
    image: "fish1.webp",
  },
  {
    id: 4,
    name: "Vegitable Biryani",
    price: 200,
    image: "vegbirayni.jpg",
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    price: 180,
    image: "paneer.jpg",
  },
  {
    id: 6,
    name: "Aloo Gobi",
    price: 150,
    image: "aloogobi.jpg",
  },
];

let cart = [];

function searchProducts() {
  let query = document.getElementById("search").value.toLowerCase();

  let filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(query);
  });
  displayProducts(filtered);
}

function displayProducts(filtered = products) {
  let productDiv = document.getElementById("products");
  productDiv.innerHTML = "";
  filtered.forEach((product) => {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.innerHTML = `
       <img class="img1" src="${product.image}" alt="" />
      <p class="p1">${product.name}</p>
      <p class="p2">${product.price}</p>
      <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productDiv.appendChild(productContainer);
  });
}
function addToCart(id) {
  let selectedProduct = products.find((product) => product.id === id);
  let existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...selectedProduct, quantity: 1 });
  }
  showToast();
  updateCart();
}
function updateCart() {
  let cartDiv = document.getElementById("cart-c");
  cartDiv.innerHTML = "";

  let totalAmount = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty</p>";
    document.getElementById("total").textContent = "Total:₹0";
    localStorage.removeItem("cart");
    return;
  }

  cart.forEach((item, index) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-p");

    totalAmount += item.price * item.quantity;

    cartItem.innerHTML = `
     <img src="${item.image}" alt="${item.name}" />
          <p>${item.name} - ${item.price}</p>
          <input type="number" min="1" value="${item.quantity}" onchange="quantityUpdate(${index},this.value)"/>
          <button onclick="remove(${index})">Remove</button>
    `;
    cartDiv.appendChild(cartItem);
  });

  document.getElementById("total").textContent = `Total:${totalAmount}`;

  localStorage.setItem("cart", JSON.stringify(cart));
}

window.addEventListener("DOMContentLoaded", () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCart();
  }
});

function remove(index) {
  cart.splice(index, 1);
  updateCart();
}
function quantityUpdate(index, quantity) {
  cart[index].quantity = Math.max(1, quantity);
  updateCart();
}
displayProducts();

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}