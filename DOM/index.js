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

var element1 = document.createElement("li");
var textElement = document.createTextNode("Add element");
element1.appendChild(textElement);
document.getElementById("list").appendChild(element1);

var prebaci = document.getElementById("text").firstElementChild;
document.getElementById("list").appendChild(prebaci);



var addNew = document.createElement("li");
var textNodeNew = document.createTextNode("Novi Element u drugom UL");
addNew.appendChild(textNodeNew);
document.getElementById("text").appendChild(addNew);

var noviGore = document.getElementById("text").lastElementChild;
document.getElementById("list").appendChild(noviGore);

var rem = document.getElementById("list");
if(rem.hasChildNodes()){
    rem.removeChild(rem.firstChild);
}