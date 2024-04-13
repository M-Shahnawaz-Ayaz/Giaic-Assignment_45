// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("your sandwich order : ");
    for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
        var items = item_1[_a];
        console.log(items, "with free soft drink");
    }
}
console.log("\nEnjoy your sandwich Mr shah and give us rate\n");
sandwich("\nbeef_sandwich", "chicken_sandwich", "classic BLT\n");
sandwich("\nTurkey Avocado", "Veggie Garden", "classic BLT\n");
sandwich("\nTikka mali", "BBQ_sandwich", "Ham and swiss\n");
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
var my_car = car_info("Toyota", "Corolla", "color", "blue", "year", 2020);
console.log(my_car);
