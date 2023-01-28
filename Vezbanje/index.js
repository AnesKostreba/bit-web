var e = document.getElementById("prvi").lastElementChild;
var a = document.getElementById("drugi");

function drugi() {
    var drugi = document.querySelector("#drugi");
    drugi.style.fontSize = "50px";
}

function treci() {
    var treci = document.getElementById("treci");

    treci.style.backgroundColor = "yellow";
    treci.style.fontSize = "30px";
}

var cetvrti = document.getElementById("cetvrti");
cetvrti.classList.remove("active");
cetvrti.classList.add("none");

var novii = document.getElementById("cetvrti").children[0];
novii.classList.add("active");

function peti() {
    // var input = document.querySelector("#input");
    // var node = document.getElementById("cetvrti");
    // input.textContent = input.value;
    // node.classList.add(input);



    var input = document.querySelector("#input");
    var node = document.getElementById("cetvrti");
    if(input.value){
        var tex = document.createElement("h1");
        tex.textContent = input.value;
        node.appendChild(tex);
    }
    
    // node.classList.add(input.value);
    node.style.border = input.value;
    input.value = "";

}




