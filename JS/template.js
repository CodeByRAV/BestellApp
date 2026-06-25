function templateCategory(category, indexMenu) {

    return `<div class="category-separator">
                <img src="${category.icon}}" alt="${category.alt}}">
                <h2>${category.category}</h2>
            </div>
            <div id="${category.category}-dishes" class="dishes-container">
                ${dishesHTML}
            </div>`;
}

function templateDish() 


function templateDishes()