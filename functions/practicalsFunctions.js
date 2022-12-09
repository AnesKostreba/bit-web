// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

function checker(input, number) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] == number) {
            return true;
        } 
    }
    return false;
}
console.log(checker("dddsdad55da", 5));


// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”


function insert(string, char, pos) {
    var res = '';
    for (var i = 0; i < string.length; i++) {
        if (i === pos - 1) {
            res += char;
        }
        res += string[i];
    }
    return res;
}
console.log(insert("Goo morning","d", 4));


// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”


function insert(string,pos) {
    var res = '';
    for (var i = 0; i < string.length; i++) {
        if (i === pos) {
            continue;
        }
        res += string[i];
    }
    return res;
}
console.log(insert("Goodd morning", 3));



// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]


function deletes(input){
    var newArr = [];
    for(var i=0; i<input.length;i+=2){

    }
}

