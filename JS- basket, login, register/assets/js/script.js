const carsData = [
    { name: "Koenigsegg", type: "Sport", fuel: "90L", passengers: "2 People", price: 99.00 },
    { name: "Nissan GT-R", type: "Sport", fuel: "80L", passengers: "2 People", price: 80.00 },
    { name: "Rolls-Royce", type: "Sedan", fuel: "70L", passengers: "4 People", price: 96.00 },
    { name: "All New Rush", type: "SUV", fuel: "70L", passengers: "6 People", price: 72.00 },
    { name: "CR-V", type: "SUV", fuel: "80L", passengers: "6 People", price: 80.00 }
];

let basket = [];

if (window.location.pathname === '/index.html') {
    const carCardsContainer = document.querySelector('.car-cards');
    carsData.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="car-image.jpg" alt="Car Image">
            <h3>${car.photo}</h3>
            <p>Type: ${car.title}</p>
            <p>Fuel: ${car.price}</p>
            <p>Passengers: ${car.decrement}</p>
            <p>Price: $${car.remove}</p>
            <button class="add-to-basket">Add to Basket</button>
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
if (window.location.pathname === '/basket.html') {
    const basketTableBody = document.querySelector('#basket-table tbody');
    basket.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.photo}</td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td>${car.decrement}</td>
            <td>$${car.remove}</td>
        `;
        basketTableBody.appendChild(row);
    });
}
