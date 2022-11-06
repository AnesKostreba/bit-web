//1.  Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.

function converts(niz) {
    var result = [];
    for (var i = 0; i < niz.length; i++) {
        var r = Number(niz[i]);
        if(r && niz[i] !== Infinity){
            result.push(r);
        }
    }
    return result;
}

niz = ["1", "21", undefined, "42", "1e+3", Infinity]
console.log(converts(niz));


// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.

function skippingElements(input){
    var res = "";
    for(var i=0; i<input.length;i++){
        if(input[i] !== null && input[i] !== undefined && !isNaN(input[i]) && isFinite(input[i])){
            res += input[i];
        }
    }
    return res;
}


input = [NaN, 0, 15, false, -22, '',undefined,47,null];
console.log(skippingElements(input));

//3. Write a program to filter out falsy values from the array.
