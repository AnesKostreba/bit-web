// var niz = [1,2,3,-4,-6,9,12];
// var a = 0;;

// for(var i=0; i<niz.length;i++){
// if(niz[i]==3){
// a = niz[i];
// console.log("Postoji");
// }
// }
// console.log(a);

// var suma = 0;
// 
// for(var i=0; i<niz.length; i++){
// suma += niz[i];
// }
// console.log(suma);


//broj paran/neparan

// for (var i = 0; i < 15; i++) {
// if (i % 2 == 0) {
// console.log("Broj je paran " + i);
// } else if (i % 2 != 0) {
// console.log("Broj nije paran " + i);
// }
// };


//sabiranje do 1000

// var suma = 0;
// for (var i = 0; i < 1000; i++) {
// if (i % 3 === 0 || i % 5 === 0) {
// suma = suma + i;
// }
// }
// console.log(suma);


//zbir i proizvod niza

// var niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var zbir = 0;
// var proizvod = 1;

// for (var i = 0; i < niz.length; i++) {
// zbir += niz[i];
// proizvod *= niz[i];
// };
// console.log(zbir);
// console.log(proizvod);


//stampanje elemenata niza kao string
// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];

// var a = "";
// for (var i = 0; i < x.length; i++) {
// a += x[i];
// a += " "
// };
// console.log(a);



//prosek ocena

// var studenti = [["David", 80], ["Marko", 77], ["Dany", 88,], ["John", 95], ["Thomas", 68]];
// var prosek = 0;
// for (var i = 0; i < studenti.length; i++) {
// prosek = prosek + studenti[i][1];
// var prosek1 = (prosek / studenti.length)
// }
// console.log("Prosek ocena je: " + (prosek) / studenti.length);

// if (prosek1 < 60) {
// console.log("Ocena : F");
// } else if (prosek1 < 70) {
// console.log("Ocena : D");
// } else if (prosek1 < 80) {
// console.log("Ocena : C");
// } else if (prosek1 < 90) {
// console.log("Ocena : B");
// } else if (prosek1 < 100) {
// console.log("Ocena : A");
// }


// FizBuzz
// var brojevi;
// for (var i = 1; i < 100; i++) {
// if (i % 3 == 0 && i % 5 == 0) {
// console.log(i + " FizzBuzz");
// } else if (i % 5 == 0) {
// console.log(i + " Buzz");
// } else if (i % 3 == 0) {
// console.log(i + " Fizz");
// }
// }


// da li se element nalazi u nizu

// var e = 3;
// var a = [5, -4, 31, 3, 7];
// // 
// for (var i = 0; i < a.length; i++) {
// if (a[i] == e) {
// console.log("Yes "+i);
// break;
// }
// };


// mnozenje pozitivnog elementa

// var array = [-3, 11, 5, 3.4, -8];
// // 
// for (var i = 0; i < array.length; i++) {
// if (array[i] > 0) {
// array[i] *= 2
// }
// }
// console.log(array);


//zbir pozitivnih brojeva

// var array = [3, 11, -5, -3, 2, 2];
// var zbir = 0;

// for(var i=0;i<array.length;i++){
// if(array[i] > 0){
// zbir += array[i];
// }
// }
// console.log(zbir);




//popunjavanje treceg niza 
// var array1 = [4, 5, 6, 2];
// var array2 = [3, 8, 11, 9];
// var array3 = [];
// for (var i = 0; i < array1.length; i++) {
    // array3.push(array1);
    // array3.push(array2);
// }
// console.log(array3);
// // 

// var a = [

    // [1, 2, 1, 24],
    // [8, 11, 9, 4],
    // [7, 0, 7, 27]
// ];

// for (var i = 0; i < a.length; i++) {
    // console.log(a[i])
    // for (var j = 0; j < a[i].length; j++) {
        // console.log(a[i][j]);
    // };
// }

// var input = [4,2,3,4,-1,-19,6,-22];
// var minimum = input[0];
// var secoundMinimum = input[0];
// for(var i=0;i<input.length;i++){
    // if(input[i] < minimum){
        // minimum = input[i];
    // }
// }


// for(var i=0;i<input.length;i++){
    // if(input[i] < secoundMinimum && input[i] > minimum){
        // secoundMinimum = input[i];
    // }
// }
// console.log(minimum,secoundMinimum);


