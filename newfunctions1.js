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
        } else {
            niz[i] = 20;
        }
    }
    return niz;
}
var niz = [3, 500, -10, 149, 53, 414, 1, 19];
console.log(dividingMembers(niz));

// Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:



function student(students, points) {
    for (var i = 0; i < students.length; i++) {
        if (points[i] <= 61 && points[i] > 50) {
            console.log(students[i] + "je osvojio " + points[i] + " i dobio je 6");
        }
        else if (points[i] <= 70 && points[i] > 60) {
            console.log(students[i] + " je osvojio " + points[i] + " i dobio je 7");
        }
        else if (points[i] <= 80 && points[i] > 70) {
            console.log(students[i] + " je osvojio " + points[i] + " i dobio je 8");
        }
        else if (points[i] <= 90 && points[i] > 80) {
            console.log(students[i] + " je osvojio " + points[i] + " i dobio je 9");
        }
        else if (points[i] <= 100 && points[i] > 90) {
            console.log(students[i] + " je osvojio " + points[i] + " i dobio je 10");
        }
        else {
            console.log(students[i] + " je osvojio " + points[i] + " i nije polozio ispit");
        }
    }
    return "";
}

var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var points = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(student(students, points));


// Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.


function numbers(num) {
    var result = 0;
    for (var i = 0; i < num; i++) {
        if (i % 2 == 0) {
            result += i;
        } else if (i % 2 !== 0 && i < 500) {
            result -= i;
        }
        
    }
    result = result * 12.5;
    return result;
}
console.log(numbers(1000));


// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
    // letters) in the array and create a new string from them. Print it out in the console.






//8.  Write a program that takes a string and prints its characters out in reversed order in the
// console.


    function reverse(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    const string = reverse('Belgrade Institute of Technology');
    console.log(string);
