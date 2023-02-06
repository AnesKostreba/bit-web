var xmlHttp = new XMLHttpRequest();

xmlHttp.open('GET',"http://www.geoplugin.net/xml.gp?ip=46.235.96.108");

xmlHttp.onload = function(){
    var xmlDoc = xmlHttp.responseXML;
    console.log(xmlDoc);
    var location = xmlDoc.querySelector('geoplugin_city').innerHTML;
    
    
    function addElement() {
    
        const newDiv = document.createElement("h1");
        const newContent = document.createTextNode(location);
        newDiv.appendChild(newContent);
      
        const currentDiv = document.getElementById("h1");
        document.body.insertBefore(newDiv, currentDiv);
    }
    
    addElement();
    
}

xmlHttp.send();


