// function styling() {
//     var stl = document.getElementById("text");
//     stl.style.backgroundColor = "red";
// }

// var b =document.getElementById("text").children.length;
// console.log(b);
// console.log(styling());

//     var all = document.getElementsById("text");
//     all.childNodes[1].style.backgroundColor = "green";
    
// console.log(all);



var node = document.createElement('li');
var textNode = document.createTextNode("Novi Li");
node.appendChild(textNode);
document.getElementById("list").appendChild(node);

var node2 = document.getElementById("list").lastElementChild;
document.getElementById("text").appendChild(node2);



var node3 = document.getElementById("text");

node3.style.backgroundColor = "red";

function hideElement(){
    var el = document.getElementById("list");
    el.style.display = "none";
}

function showElement(){
    var se = document.getElementById("list");
    se.style.display = "block";
}
