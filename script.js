let basket = [];

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
    }
}
