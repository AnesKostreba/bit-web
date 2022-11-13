// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.
"use strict";

function brojanje(niz) {
    var samoglasnik = 0;

    for (var i = 0; i < niz.length; i++) {
        if (niz[i] == 'a' || niz[i] == 'e' || niz[i] == 'i' || niz[i] == 'o' || niz[i] == 'u') {
            samoglasnik++;
        }
    }

    return samoglasnik;
}

var result = brojanje("aasdfiaai");
console.log(result);


//2. Write a function that combines two arrays by alternatingly taking elements.

function intertwines(niz1, niz2) {
    var res = [];

    for (var i = 0; i < niz1.length; i++) {
        res.push(niz1[i]);
        res.push(niz2[i]);
    }
    return res;
}
console.log(intertwines(['a', 'e', 'i'], [1, 2, 3]));

//3. Write a function that rotates a list by k elements.









//4. Write a function that takes a number and returns array of its digits.
