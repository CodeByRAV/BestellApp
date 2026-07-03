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
                    <button class="add-to-basket-button" onclick="addToBasket('${indexMenu}', ${indexDishes})">Add to <br class="mobile-break"> Basket</button>
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
            <span class="subtotal-font">Subtotal: <span>${subtotal.toFixed(2)} €</span></span>
            <span class="subtotal-font">Delivery-Fee: <span>${deliveryCost.toFixed(2)} €</span></span>
            <div class="summary-separator"></div>
            <span class="total-font">Total: <span>${total.toFixed(2)} €</span></span>
        </div>
        <div class="checkout-button-container">
        <button class="checkout-button" onclick="openDialog(event)">
            Buy Now ${total.toFixed(2)} €
        </button>
        </div>
        <dialog onclick="closeDialog(event)" onclose="removeOpenedClass()" closedby="any" id="orderInProgress"
        class="dialog" aria-labelledby="dialog-image-title">
            <section onclick="stopProp(event)">
                <div class="dialog-close-button">
                    <button onclick="closeDialog(event)" aria-label="Close dialog">
                        <img src="./assets/icon/close.svg" alt="close button">
                    </button>
                </div>
                <div class="dialog-content">
                    <img src="./assets/icon/Truck.png" alt="order confirmed">
                    <h5>Order confirmed!</h5>
                    <span class="order-confirmation-font">Your order will be delivered soon!</span>
                </div>
            </section>
        </dialog>
    `;
}

function templateBasketItem(basketItem, indexBasket) {
    return `
    <div class="basket-item">
    <div>${"1x " + basketItem.name}</div>
    <div class="basket-amount-price"><div class="counter"><button onclick="decreaseDishCounter(${indexBasket})">-</button>${basketItem.amount}<button onclick="increaseDishCounter(${indexBasket})">+</button></div><span>${basketItem.price.toFixed(2)}€</span></div>
    </div>
    `
}