var button = document.querySelector(".sendMessage");
var input = document.querySelector(".text");
var mainArea = document.querySelector(".chat");
var forDeleting = document.querySelector('p');


function sendMessage() {
    if (input.value) {
        var msg = document.createElement("p");
        msg.textContent = input.value;
        mainArea.appendChild(msg);
        input.value = "";
    }
};

function reset() {
    
    forDeleting.remove();

    // var parentEl = forDeleting.element;
    // parentEl.remove(forDeleting);
}
// document.querySelector('.text').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         var msg = document.createElement("p");
//         msg.textContent = input.value;
//         mainArea.appendChild(msg);
//         input.value = "";
//     }
// });