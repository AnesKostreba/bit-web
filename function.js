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


// function calculates(numToSeparate) {

// var arrayOfDigits = Array.from(String(numToSeparate), Number);
// var num = 0;
// for (var i = 0; i < arrayOfDigits.length; i++) {
// num++;

// }

// return num;
// }

// var broj = calculates(12);
// console.log(broj);




// Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


// function broj(niz,e) {
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
// var result = broj([1,2,3,4,5,8,7,7,7],7);
// console.log(result);





//Write a program that calculates the sum of odd elements of a given array.


// function calc(niz) {
// var zbir = 0;
// for (var i = 0; i < niz.length; i++) {
// if (niz[i] % 2 == 1) {
// zbir += niz[i];
// }
// }

// return zbir;
// }

// var result = calc([1,3,4,5,6]);
// console.log(result);




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

function concat(input,n){
    var result = '';
    if(n==undefined){
        n = 1;
    }
    for(var i=0; i<n;i++){
        result += input;
    }
    return result;
}
console.log(concat("eee",3));