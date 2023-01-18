var input = document.querySelector('.text');
var mojCet = document.querySelector('.chat');

function sendMessage(){
    if(input.value){
        var node = document.createElement("p");
        node.textContent = input.value;
        mojCet.appendChild(node);
        input.value = '';
    }
}


function ress1(){
    var aa = document.getElementById("chat");
    aa.innerHTML = "";
}

function showAll(){
    var a = document.getElementById("container");
    a.style.display = "block";
}

function exit(){
    var a1 = document.getElementById("container");
    a1.style.display = "none";
}