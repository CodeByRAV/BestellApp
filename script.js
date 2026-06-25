function renderCategories() {
    let menuContainer = document.getElementById("menus");
    for(let indexMenu = 0; indexMenu < menu.length; indexMenu++) {
       const category = menu[indexMenu];
        menuContainer.innerHTML += templateCategory(category);
    }
}