var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);
/*
var filteredNumberArray = numberArray.filter(function (value) {
  return value > 5;
});                                                               //Approach 1
console.log("Filtered Number Array :", filteredNumberArray);
*/

function above5filter (value) {
  return value > 5;
}                                                                //Approach 2
var filteredNumberArray = numberArray.filter(above5filter);
console.log("Filtered Number Array :", filteredNumberArray);


var shoppingList = [
 "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List :", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List : ", searchedShoppingList);
