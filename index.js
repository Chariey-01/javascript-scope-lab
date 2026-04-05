// Global variables attached to window
window.burgers = ["Hamburger", "Cheeseburger"];
window.featuredDrink = "Strawberry Milkshake";

// Function-scoped variable
function addBurger() {
  const newBurger = "Flatburger";
  window.burgers.push(newBurger);
}

// Block-scoped variable
if (true) {
  const anotherNewBurger = "Maple Bacon Burger";
  window.burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
  window.featuredDrink = "The JavaShake";
}