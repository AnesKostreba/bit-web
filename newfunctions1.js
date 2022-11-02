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
            max = niz[i]
        }
    }
    var indexMin = niz.indexOf(min);
    var indexMax = niz.indexOf(max);
    niz[indexMax] = min;
    niz[indexMin] = max;
    return niz;
}
var niz = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(switchElement(niz));
