function templateCategory(category, indexMenu) {

    return `<div class="category-separator">
                <img src="${menuCategory.icon}}" alt="${menuCategory.alt}}">
                <h2>${menuCategory.category}</h2>
            </div>
            <div id="${menuCategory.category}-dishes" class="dishes-container">
                ${templateDishes(menuCategory)}
            </div>`;
}

function templateDishes(menuCategory, indexMenu) {

}

function templateDish(dish, indexDishes) {

