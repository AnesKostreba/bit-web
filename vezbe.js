//Write a program that checks if a given element e is in the array a.



// function checks(niz, e) {
// for (var i = 0; i < niz.length; i++) {
// if (niz[i] == e) {
// return true;
// } else {
// return false;
// }
// }
// }
// console.log(checks([5, -4.2, 3, 7], 3));
// 


//Write a program that multiplies every positive element of a given array by 2.
// function multiplies(niz, input){
// for(var i=0;i<niz.length;i++){
// 
// if(niz[i] > 0){
// niz[i]*=input; 
// }
// }
// return niz;
// }
// 
// var rezultat = multiplies([-3, 11, 5, 3.4, -8], 2);
// console.log(rezultat);
// 

// Write a program that finds the minimum of a given array and prints out its value and
// index.

// function minimum(array) {
// var min = array[0];
// for (var i = 0; i < array.length; i++) {
// if (array[i] < min) {
// min = array[i];
// }
// }
// return min;
// }
// console.log(minimum([-3, 11, 5, 3.4, -8, -11]));


//Write a program that finds the second smallest number and prints out its value.

// function secondMin(array) {
    // var min = array[0];
    // var secound = array[0];
    // for (var i = 0; i <= array.length; i++) {
        // if(array[i] < min){
            // min = array[i]
        // }
    // }
    // for(var i=0;i<array.length;i++){
        // if(array[i]<secound && array[i] > min){
            // secound = array[i];
        // }
    // }
    // return secound;
// }
// console.log(secondMin([-3, 11, 5, 3.4, -8, -11]));


//Write a program that calculates the sum of positive elements in the array.
//array: [3, 11, -5, -3, 2]

// function calculates(array){
    // var res = 0;
    // for(var i=0;i<array.length;i++){
        // if(array[i] > 0){
            // res += array[i];
        // }
    // }
    // return res;
// }
// console.log(calculates([3, 11, -5, -3, 2,2]));

//Write a program that checks if a given array is symmetric. An array is symmetric if it can
//be read the same way both from the left and the right hand side.
