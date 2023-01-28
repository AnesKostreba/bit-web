

function move(event){
    var playerX = event.layerX;
    var playerY = event.layerY;
    var imgg = document.getElementById('image');
    imgg.style.position = "absolute";
    imgg.style.left = playerX+'px';
    imgg.style.top = playerY+'px';
}

