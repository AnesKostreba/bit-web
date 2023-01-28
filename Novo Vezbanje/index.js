var a = document.querySelector("input");

// function prvi(){
//     alert("Thanks!!");
//     console.log(a.clientTop);
// }

// function drugi(){
//     alert("Thanks again!!");

// }

// a.addEventListener("click",prvi);

// a.addEventListener("click",function(){
//     alert("Hello World!!");
// });

// var e = document.getElementById("btn");
// e.addEventListener("click",displayDate);
// e.addEventListener("mouseover",mover);
// e.addEventListener("mouseleave",mleave);

// function mleave(){
//     document.getElementById("demo").textContent += "Mouse Leave    ";
// }


// function mover(){
//     document.getElementById("demo").textContent += "        Mouse Over     ";
// }

// function displayDate(){
//     document.getElementById("demo").innerHTML = Date();
// }

var c = 5;
var b = 5;

document.getElementById("btn").addEventListener("click", function () {
    myFunction(c, b);
});

function myFunction(a, b) {
    document.getElementById("demo").textContent = a + b;
}





function showCoords(event) {

    var x = event.clientX;
    var y = event.clientY;
    var bb = document.getElementById("btn");
    bb.style.left = x+'px';
    bb.style.top = y+'px';
    

    var tex = "Mouse Click on X is : " + x + " Mouse Click on Y is : " + y;

    document.getElementById("demo").innerHTML = tex;
}

