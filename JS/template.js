function templateCategory(menuCategory, indexMenu) {
    return `<div class="category-separator">
                <img src="${menuCategory.icon}" alt="${menuCategory.alt}">
                <h2>${menuCategory.category}</h2>
            </div>
            <div id="${menuCategory.category}-dishes" class="dishes-container">
                ${getDishesHTML(menuCategory.dishes, indexMenu)}
            </div>`;
}

function getDishesHTML(dishes, indexMenu) {
    let dishesHTML = "";
    for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
        const dish = dishes[indexDishes];
        dishesHTML += templateDish(dish, indexMenu, indexDishes);
    }
    return dishesHTML;
}

function templateDish(dish, indexMenu, indexDishes) {
    return `<div class="dish">
                <div class="dish-info-container">
                <img src="${dish.imageSource}" alt="${dish.name}">
                <div class="dish-info">
                    <h4>${dish.name}</h4>
                    <p>${dish.ingredients}</p>
                </div>
                </div>
                <div class="dish-price-button-container">
                    <h4 class="price">${dish.price.toFixed(2)} €</h4>
                    <button class="add-to-basket-button" onclick="addToBasket('${indexMenu}', ${indexDishes})">Add to Basket</button>
                </div>
            </div>`;
}

function templateEmptyBasket() {
    return `
    <div class="basket-content basket-container">
        <header class="basket-header-empty">
                <h3>Your Basket</h3>
            </header>
        <span class="empty-basket">Your Basket is Empty</span>
    </div>        
`
}

function templateBasket(basketItemsHTML, subtotal, total, deliveryCost, indexBasket) {
    return `
        <header class="basket-header">
            <h3>Your Basket</h3>
        </header>

        <div class="basket-items">
            ${basketItemsHTML}
        </div>

        <div class="basket-summary">
            <span class="subtotal-font">Subtotal: ${subtotal.toFixed(2)} €</span>
            <span class="subtotal-font">Delivery-Fee: ${deliveryCost.toFixed(2)} €</span>
            <div class="summary-separator"></div>
            <span class="total-font">Total: ${total.toFixed(2)} €</span>
        </div>

        <button class="checkout-button">
            Buy Now ${total.toFixed(2)} €
        </button>
    `;
}

function templateBasketItem(basketItem, indexBasket) {
    return `
    <div class="basket-item basket-font">
    <div>${"1x " + basketItem.name}</div>
    <div class="basket-amount-price"><div class="counter"><button>-</button>${basketItem.amount}<button onclick="addToBasket(indexMenu, indexDishes)">+</button></div><span>${basketItem.price.toFixed(2)}€</span></div>
    </div>
    `
}