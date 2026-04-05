// Global variables (declared in global scope)
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function-scoped variable
function addBurger() {
  // newBurger is function-scoped to addBurger
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

// Block-scoped variable
if (true) {
  // anotherNewBurger is block-scoped inside this if statement
  const anotherNewBurger = "Maple Bacon Burger";
  burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
  // Reassign featuredDrink
  featuredDrink = "The JavaShake";
}
