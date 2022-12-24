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


// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function findLessElement(array,element){
    var newArray = [];
    for(var i = 0;i<array.length;i++){
        if(array[i] < element){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(findLessElement([2,3,8,4,11,-2],5));


// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]





// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]




