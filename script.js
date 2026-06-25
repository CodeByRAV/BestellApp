function init() {
    renderCategories();
}

function renderCategories() {
    let menuContainer = document.getElementById("menus");
    for(let indexMenu = 0; indexMenu < menu.length; indexMenu++) {
       const menuCategory = menu[indexMenu];
        menuContainer.innerHTML += templateCategory(menuCategory, indexMenu);
    }
}