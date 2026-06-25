function templateCategory(menuCategory, indexMenu) {

    return `<div class="category-separator">
                <img src="${menuCategory.icon}}" alt="${menuCategory.alt}}">
                <h2>${menuCategory.category}</h2>
            </div>
            <div id="${menuCategory.category}-dishes" class="dishes-container">
                ${templateDishes(menuCategory.dishes)}
            </div>`;
}

function templateDishes(dishes) {
    let dishesHTML = "";
    for (let indexDishes = 0; indexDishes < category.dishes.length; indexDishes++) {
        const dish = category.dishes[indexDishes];
        dishesHTML += templateDish(dish);
    }
    return dishesHTML;
}

function templateDish(dish, indexDishes) {

