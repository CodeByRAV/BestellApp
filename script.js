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

    updateMobileCounter();

        if (basket.length === 0) {
        basketContainer.innerHTML = templateEmptyBasket();
        return;
    }

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketItem = basket[indexBasket];

        subtotal += basketItem.price * basketItem.amount;
        basketItemsHTML += templateBasketItem(basketItem, indexBasket);
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
    basket[indexBasket].amount++;
    renderBasket(); 
}

function decreaseDishCounter(indexBasket) {
    if(basket[indexBasket].amount === 1) {
        basket[indexBasket].amount = 0;
        basket.splice(indexBasket, 1)
        renderBasket();
        return
    }
    basket[indexBasket].amount--;
    renderBasket(); 
}

function removeOpenedClass() {
    dialogRef.classList.remove("dialog-opened");
}   

function updateMobileCounter() {
    let mobileCounter = document.getElementById("mobileCounter");
    let amount = 0;

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        amount += basket[indexBasket].amount;
    }

    mobileCounter.innerHTML = amount;

    if (amount === 0) {
        mobileCounter.style.display = "none";
    } else {
        mobileCounter.style.display = "flex";
    }
}

function toggleBasket() {
    let basketSection = document.getElementById("basketSection");
    basketSection.classList.toggle("basket-open");
}

function emptyCheckoutBasket(event) {
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basket.splice(indexBasket, 1);
    }
    renderBasket();
    openDialog(event);
}