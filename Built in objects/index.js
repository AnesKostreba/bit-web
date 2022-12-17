//1. Write a functional expression that duplicates each element of a given array.

function duplicate(arr) {
    return arr.concat(arr).sort()
} 
console.log(duplicate([2, 4, 7, 11, -2, 1]))


//2. Write a functional expression that removes all duplicates in a given array.

var array = [8,13,8,9,12,8,1,1,4,13];

var newArray = array.filter(function(item,pos){
    return array.indexOf(item) === pos;
});

function compareNumbers(a,b){
    return a-b;
}

console.log(newArray.sort(compareNumbers));


//3.
//a. Write a function that checks if a given array has odd number of elements.

function choseOdd(array){
    if(array.length % 2 == 0){
        return "Array is even" ;
    }else{
        return "Array is odd";
    }

}

console.log(choseOdd([1, 2, 9, 2, 1]));

// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.





// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.

function minValue(array){
    var minNum = Math.min(...array);
    var minLastIndex = array.lastIndexOf(minNum);
    return( minNum, minLastIndex)
}

var array = [1,4,-2,11,8,1,-2,3];
console.log(minValue(array));

