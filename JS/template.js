function templateEmptyBasket() {
    return `<header class="basket-header">
                <h3>Your Basket</h3>
            </header>
        <span>Your Basket is Empty</span>`
}

function templateCategory(menuCategory, indexMenu) {
    return `<div class="category-separator">
                <img src="${menuCategory.icon}" alt="${menuCategory.alt}">
                <h2>${menuCategory.category}</h2>
            </div>
            <div id="${menuCategory.category}-dishes" class="dishes-container">
                ${getDishesHTML(menuCategory.dishes)}
            </div>`;
}

function getDishesHTML(dishes) {
    let dishesHTML = "";
    for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
        const dish = dishes[indexDishes];
        dishesHTML += templateDish(dish);
    }
    return dishesHTML;
}

function templateDish(dish) {
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
                    <button class="add-to-basket-button" onclick="addToBasket('${dish.name}', ${dish.price})">Add to Basket</button>
                </div>
            </div>`;
}

