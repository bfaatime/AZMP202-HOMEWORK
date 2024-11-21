const carsData = [
    { name: "Koenigsegg", type: "Sport", fuel: "90L", passengers: "2 İnsan", price: 99.00, image: "car-image.jpg" },
    { name: "Nissan GT-R", type: "Sport", fuel: "80L", passengers: "2 İnsan", price: 80.00, image: "car-image.jpg" },
    { name: "Rolls-Royce", type: "Sedan", fuel: "70L", passengers: "4 İnsan", price: 96.00, image: "car-image.jpg" },
    { name: "All New Rush", type: "SUV", fuel: "70L", passengers: "6 İnsan", price: 72.00, image: "car-image.jpg" },
    { name: "CR-V", type: "SUV", fuel: "80L", passengers: "6 İnsan", price: 80.00, image: "car-image.jpg" }
];

let basket = [];

if (window.location.pathname === '/index.html' || window.location.pathname === '/your-folder/index.html') {
    const carCardsContainer = document.querySelector('.car-cards');
    
    carsData.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.image}" alt="Avtomobil Şəkli">
            <h3>${car.name} <br> <span>${car.type}</span></h3>
            <p>Yanacaq: ${car.fuel}</p>
            <p>Sərnişinlər: ${car.passengers}</p>
            <h4>$${car.price}/gün</h4>
            <button class="add-to-basket">Basketə əlavə et</button>
        `;
        carCardsContainer.appendChild(carCard);

        carCard.querySelector('.add-to-basket').addEventListener('click', () => {
            basket.push(car); 
            updateBasketCount(); 
        });
    });
}

function updateBasketCount() {
    document.getElementById('basket-count').textContent = basket.length;
}

if (window.location.pathname === '/basket.html' || window.location.pathname === '/your-folder/basket.html') {
    const basketTableBody = document.querySelector('#basket-table tbody');
    
    basketTableBody.innerHTML = '';

    basket.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${car.image}" alt="Avtomobil Şəkli" style="width: 50px;"></td>
            <td>${car.name}</td>
            <td>$${car.price}</td>
            <td><button class="decrement">-</button> 1 <button class="increment">+</button></td>
            <td><button class="remove">Sil</button></td>
        `;
        basketTableBody.appendChild(row);

        row.querySelector('.remove').addEventListener('click', () => {
            const index = basket.indexOf(car);
            if (index !== -1) {
                basket.splice(index, 1); 
                updateBasketCount(); 
                row.remove(); 
            }
        });

        row.querySelector('.decrement').addEventListener('click', () => {
        });

        row.querySelector('.increment').addEventListener('click', () => {
        });
    });
}
