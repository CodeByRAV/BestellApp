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
                <img src="${dish.imageSource}" alt="${dish.name}">
                <div class="dish-info">
                    <h4>${dish.name}</h4>
                    <p>${dish.ingredients}</p>
                    <p class="price">${dish.price.toFixed(2)} €</p>
                </div>
            </div>`;
}

