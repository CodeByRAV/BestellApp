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
    basketContainer.innerHTML = "";

    let basketItemsHTML = "";
    let subtotal = 0;
    let deliveryCost = 5;



    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketItem = basket[indexBasket];

        subtotal += basketItem.price;
        basketContainer.innerHTML += templateBasketItem(basketItem);
    }
    basketContainer.innerHTML += templateBasketSummary(subtotal, total);
}

function addToBasket(indexMenu, indexDishes) {
    const dish = menu[indexMenu].dishes[indexDishes];

    basket.push(dish);

    renderBasket();
}
