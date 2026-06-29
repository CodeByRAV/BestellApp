let basket = [];

function init() {
    renderCategories();
    renderBasket();
}

function renderCategories() {
    let menuContainer = document.getElementById("menus");
    for (let indexMenu = 0; indexMenu < menu.length; indexMenu++) {
        const menuCategory = menu[indexMenu];
        menuContainer.innerHTML += templateCategory(menuCategory, indexMenu);
    }
}

function renderBasket() {
    let basketContainer = document.getElementById("basket-content");
    let subtotal = 0;
    let deliveryCost = 5;
    let basketItemsHTML = "";

        if (basket.length === 0) {
        basketContainer.innerHTML = templateEmptyBasket();
        return;
    }

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketItem = basket[indexBasket];

        subtotal += basketItem.price * basketItem.amount;
        basketItemsHTML += templateBasketItem(basketItem);
    }

    let total = subtotal + deliveryCost;

    basketContainer.innerHTML = templateBasket(basketItemsHTML, subtotal, total, deliveryCost);
}

function addToBasket(indexMenu, indexDishes) {
    const dish = menu[indexMenu].dishes[indexDishes];
 
    dish.amount++;

    if (!basket.includes(dish)) {
        basket.push(dish);
    }
    renderBasket(); 
}

function increaseDishCounter(indexBasket) {
    const dish = menu[indexMenu].dishes[indexDishes];
 
    dish.amount++;

    if (!basket.includes(dish)) {
        basket.push(dish);
    }
    renderBasket(); 
}