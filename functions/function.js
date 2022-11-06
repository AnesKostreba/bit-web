//Write a program that calculates the maximum of two given numbers.
// function broj(a, b) {

// var maximum;
// if (a > b) {
// maximum = a;
// }else if (b > a) {
// maximum = b;
// }
// return maximum;
// }

// var rezultat = broj(112,22);
// console.log(rezultat);



//Write a program that checks if a given number is odd.

// function odd(number){
// if(number % 2==1){
// return "Number is odd";
// }else{
// return "Number is not odd";
// }
// }

// var broj = odd(4);
// console.log(broj);



//Write a program that checks if a given number is a three digit long number.

// function threeDigit(number){
// if(number > 100){
// return "Number is a three digit long";
// }else{
// return "Number is not a three digit long";
// }
// }
// var broj = threeDigit(33);
// console.log(broj);



//Write a program that calculates an arithmetic mean of four numbers.

// function arithmetic(a,b,c,d){
// var reuslt = (a+b+c+d) / 4;
// return reuslt;

// }
// var arithmeticMean = arithmetic(2,4,6,18);
// console.log(arithmeticMean);



//Write a program that calculates a number of digits of a given number.


function calculates(numToSeparate) {

    var arrayOfDigits = Array.from(String(numToSeparate), Number);
    var num = 0;
    for (var i = 0; i < arrayOfDigits.length; i++) {
        num++;

    }

    return num;
}

var broj = calculates(12);
console.log(broj);




// Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


// function broj(niz, e) {
// var brojPonavljanja = 0;
// for (var i = 0; i < niz.length; i++) {
// if (niz[i] == e) {
// brojPonavljanja++;
// }
// // 
// }
// return brojPonavljanja;
// }
// // 
// var result = broj([1, 2, 3, 4, 5, 8, 7, 7, 7], 7);
// console.log(result);
// // 




//Write a program that calculates the sum of odd elements of a given array.


function calc(niz) {
    var zbir = 0;
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 1) {
            zbir += niz[i];
        }
    }

    return zbir;
}

var result = calc([1, 3, 4, 5, 6]);
console.log(result);




//Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

var niz = ["a", "a", "A", "c", "h"];
var a = "a";
var brojPonavljanja = 0;

for (var i = 0; i < niz.length; i++) {
    if (niz[i] == a) {
        brojPonavljanja++;
    }
};
console.log(brojPonavljanja);

// Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function spajanjeString(input, n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += input;
    }
    return result;
}
console.log(spajanjeString('t', 4));


// Write a program that draws a square of a given size. For example, if the size of
// square is 5 the program should draw:

function square(a) {
    result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += "*"
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += "*"
                } else {
                    result += " "
                }
            }
        }
        result += "\n";
    }
    console.log(result);
}
square(8);

//Write a function to check whether the `input` is a string or not.

function isString(input) {
    if (typeof input == "string") {
        return true;
    } else {
        return false;
    }
}
console.log(isString("aaa"));

//Write a function to check whether a string is blank or not.
function isStringBlank(input) {
    if (typeof input === 'string' && input.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isStringBlank(''))

//Write a function that concatenates a given string n times (default is 1).

function concatenates(input, n) {
    var result = '';
    if (n == undefined) {
        n = 1;
    }
    for (var i = 0; i < n; i++) {
        result += input;
    }
    return result;
}
console.log(concatenates("ha", 3));

//Write a function to count the number of letter occurrences in a string.

function concatNumber(niz, n) {
    var number = 0;
    for (var i = 0; i < niz.length; i++) {
        var element = niz[i];
        if (element == n) {
            number++;
        }
    }
    return number;
}
console.log(concatNumber("My randomm string", 'm'));


// Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.
function position(inputString, character) {

    for (var i = 0; i < inputString.length; i++) {
        var currentCharacter = inputString[i];
        if (currentCharacter === character) {
            return i + 1;
        }
    }
    return -1;
}

var characterPosition = position('This is my string', 'i');
console.log(characterPosition);

// 7.  Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

function convertString(string){
    var result = [];    
    for(var i = 0; i < string.length; i++){
        for(var j = 0; j<string.length;j++){
            result.push(string[j]);
        }
        break;
    }
    
    return result;
}

string = "My random string";
console.log(convertString(string));


// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.


function prostBroj(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    }
    for (var x = 2; x < num; x++) {
        if (num % x === 0) {
            return false;
        }
    }
    return true;
 }
 var result = prostBroj(4);
 console.log(result);


//  9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

// function spaceInString(str,sep){
    // 
    // for(var i = 0; i < str.length;i++){
        // if(str[i] === " "){
            // str[i] = sep;
        // }
    // }
    // return str;
// }
// 
// var res = spaceInString("My string", "_");
// console.log(res);

// ???


//10. Write a function to get the first n characters and add “...” at the end of newly created string.


function addAfterFirstCh(str,sep){
    var result = "";
    for(var i = 0; i < str.length; i++){
        var e = str[i];
        result += e;
        if(i === sep){
            result+= "...";
            break;
        }
    }
    return result;
}
console.log(addAfterFirstCh("My random string",8));


// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

function converts(niz) {
    var result = [];
    for (var i = 0; i < niz.length; i++) {
        var res = Number(niz[i]);
        if(res && niz[i] !== Infinity){
            result.push(res);
        }
    }
    return result;
}

niz = ["1", "21", undefined, "42", "1e+3", Infinity]
console.log(converts(niz));


// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.


function penzija(rodjenje,pol){
    var starost = 2022 - rodjenje;
    if(pol === "m"){
        if(starost <= 65){
            var penzija = 65 - starost;
            return penzija;
        }else{
            return "Osoba je vec u penziji";
        }
    }
    if(pol === "z"){
        if(starost <=60){
            var penzija = 60 - starost;
            return penzija;
        }else{
            return "Osoba je vec u penziji";
        }
    }
}

console.log(penzija(1994,"m"));


// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.

function sNumber(num) {
    if (num % 100 >= 11 && num % 100 <= 13) {
        return a + 'th';
    }
    switch (num % 10) {
        case 1:
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
    }
    return num + 'th';
}
console.log(sNumber(2));