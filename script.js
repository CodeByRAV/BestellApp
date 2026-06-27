let basket = [];
let subtotal = 0;
let total = 0;
let deliveryCost = 5;

function init() {
    renderCategories();
    renderBasket();
}

function renderCategories() {
    let menuContainer = document.getElementById("menus");
    for(let indexMenu = 0; indexMenu < menu.length; indexMenu++) {
       const menuCategory = menu[indexMenu];
        menuContainer.innerHTML += templateCategory(menuCategory, indexMenu);
    }
}

function renderBasket() {
    let basketContainer = document.getElementById("basket");
    basketContainer.innerHTML = "";
    let totalPrice = 0;
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketItem = basket[indexBasket];
        totalPrice += basketItem.price;

        basketContainer.innerHTML += templateBasketItem(basketItem);    
        basketContainer.innerHTML += templateBasketSummary(subtotal, total);
    }
}

function addToBasket(dish, price) {
    let dishToPush = menu[dish]
    basket[dish].push(dishToPush [0]);

    let priceToPush = menu[price];
    basket[price].push(priceToPush[0]);

    renderCategories();
    renderBasket();
}


