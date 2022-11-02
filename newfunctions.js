//1. Write a program that checks if a given element e is in the array a.

function checks(niz, n) {
    for (var i = 0; i < niz.length; i++) {
        if (n == niz[i]) {
            return true;
        }
    }
    return false;
}
var res = checks([5, -4.2, 3, 7], 7);
console.log(res);

//2. Write a program that multiplies every positive element of a given array by 2.

function multiplies(niz) {
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            niz[i] *= 2;
        }
    }
    return niz;
}
console.log(multiplies([-3, 11, 5, 3.4, -8]));

//3. Write a program that finds the minimum of a given array and prints out its value and
//index.
//Input array: [4, 2, 2, -1, 6]

function minimum(niz) {
    var min = 0;
    var index = 0;
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return console.log(min, index);
}
var res = minimum([4, 2, 2, -1, -6]);
console.log(res);

//4. Write a program that finds the second smallest number and prints out its value.

function secondMin() {
    var min = 0;
    var secondMin = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < secondMin && arguments[i] > min) {
            secondMin = arguments[i];

        }
    }

    return secondMin;
}
console.log(secondMin(4, 2, 2, -5, -6));

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]

function calculates(niz) {
    var res = 0;
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            res += niz[i];
        }
    }
    return res;
}
console.log(calculates([3, 11, -5, -3, 2, 2]));


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]

function symmetric(niz) {
    var isSymmetric = false;
    var j = niz.length - 1;

    for (var i = 0; i < niz.length; i++) {
        if(niz[i] == niz[(niz.length - 1) - i]){
            isSymmetric = true;
        } else {
            isSymmetric = false;
            break;
        }
    }
    
    if (isSymmetric) {
        return "Symetric";
    } else {
        return "Not symetric";
    }

}

console.log(symmetric([2, 4, -2, 7, -2, 4]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwines(niz1,niz2){
    var res = [];
    for(var i=0;i<niz1.length;i++){
        res.push(niz1[i]);
        res.push(niz2[i]);
    }
    return res;
}
console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenates(niz1,niz2){
    var niz3 = [];
    for(var i=0; i<niz1.length;i++){
        niz3 = niz1.concat(niz2); 
    }
    return niz3;
}
console.log(concatenates([4, 5, 6, 2], [3, 8, 11, 9]));

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

