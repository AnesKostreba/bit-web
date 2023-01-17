var button = document.querySelector(".sendMessage");
var input = document.querySelector(".text");
var mainArea = document.querySelector(".chat");
var forDeleting = document.querySelector('p');


function sendMessage() {
    if (input.value) {
        var msg = document.createElement("p");
        msg.setAttribute("id","paragraph");
        msg.textContent = input.value;
        mainArea.appendChild(msg);
        input.value = "";
    }
};

// doFoo.onclick = () => {
//     const myNode = document.getElementById("chatt");
//     myNode.innerHTML = '';
//   }


// res.onclick = () => {
//     const myNode = document.getElementById("chatt");
//     while (myNode.lastElementChild) {
//         myNode.removeChild(myNode.lastElementChild);
//       }
// }



function ress() {
    const myNode = document.getElementById("chatt");
    while (myNode.lastElementChild) {
            myNode.removeChild(myNode.lastElementChild);
      }
}

    // var parentEl = forDeleting.element;
    // parentEl.remove(forDeleting);

// document.querySelector('.text').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         var msg = document.createElement("p");
//         msg.textContent = input.value;
//         mainArea.appendChild(msg);
//         input.value = "";
//     }
// });