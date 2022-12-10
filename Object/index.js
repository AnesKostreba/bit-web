var coffe = {
    name: "Espresso",
    strength: "Medium",
    flavour: "sweet",
    milk: "Yes",
    sugar: "Yes"
};
console.log(coffe);

var favouriteMovie = {
    title: "Taken",
    actors: "Lijam Nison, Megi Grejs",
    director: "Pjer Morel",
    genre: "action-thriller",
    popularity: ""
};
console.log(favouriteMovie);



function sumM(array) {
    if (!array || array == 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        sum += element.price * element.quantity;
    }
    return sum;
}

console.log(sumM([
    { product: "Milk", quantity: 1, price: 2 },
    { product: "Egs", quantity: 2, price: 2 }
]));


// 2. You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}&quot;.


function max(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    var maxPrice = 0
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element.price > maxPrice) {
            maxPrice = element.price;
        }
    }
    return element.product + " " + maxPrice;
}
console.log(max([
    { product: "Milk", quantity: 1, price: 333 },
    { product: "bananas", quantity: 2, price: 211 },
    { product: "Egs", quantity: 2, price: 452 },
    { product: "Apple", quantity: 2, price: 2222 }
]));


// 3. Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.

function mapLetters(str='') {
    if (!str || str.length == 0) {
        return 0;
    }

    var result = {};
    
    for (var i = 0; i < str.length; i++) {
        var newArray = [];
        newArray[0] = i;
        for (var j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i != j) {
                newArray.unshift(j);
            }
        }
        result[str[i]] = newArray
    }
    return result;
}
console.log(mapLetters("froggy"));


// 4. And who cursed the most in the fight between you and your spouse? Given an object
// with three rounds, with nested objects as your scores per round, return a string of who
// cursed the most: If you, return &quot;ME!&quot; If your spouse, return &quot;SPOUSE!&quot; If a draw, return
// &quot;DRAW!&quot;


