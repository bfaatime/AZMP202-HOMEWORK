function validateForm() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    if (!title || !price || !description || !image) {
        document.getElementById("errorModal").style.display = "block";
    } else {
        alert("Form submitted successfully!");
    }
}

function closeModal() {
    document.getElementById("errorModal").style.display = "none";
}

let products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest.",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, lightweight & soft fabric.",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter.",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    }
];

function displayProducts() {
    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; 

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
        `;

        productsList.appendChild(productItem);
    });
}

function addProduct() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    if (title === "" || price === "" || description === "" || image === "") {
        alert("Please fill in all fields");
        return;
    }

    const newProduct = {
        id: products.length + 1,
        title,
        price: parseFloat(price),
        description,
        image
    };

    products.push(newProduct);
    displayProducts();
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
}

function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    displayProducts();
}

window.onload = displayProducts;