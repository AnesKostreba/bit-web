// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function switchElement(niz) {
    var min = niz[0];
    var max = niz[0];
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        } else if (niz[i] > max) {
            max = niz[i];
        }
    }
    var indexMin = niz.indexOf(min);
    var indexMax = niz.indexOf(max);
    niz[indexMin] = max;
    niz[indexMax] = min;
    return niz;
}
var niz = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(switchElement(niz));


// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function dividingMembers(niz) {
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] != 0) {
            niz[i] = niz[i] / 2 + 5;
        }else{
            niz[i] = 20;
        }
    }
    return niz;
}
var niz = [3, 500, -10, 149, 53, 414, 1, 19];
console.log(dividingMembers(niz));

