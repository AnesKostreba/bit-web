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

for (var i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log("Broj je paran " + i);
    } else if (i % 2 != 0) {
        console.log("Broj nije paran " + i);
    }
};


//sabiranje do 1000

var suma = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma = suma + i;
    }
}
console.log(suma);


//zbir i proizvod niza

var niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var zbir = 0;
var proizvod = 1;

for (var i = 0; i < niz.length; i++) {
    zbir += niz[i];
    proizvod *= niz[i];
};
console.log(zbir);
console.log(proizvod);