function desctopScreen(){
    console.log(screen.availHeight);
    console.log(screen.availWidth);
}
desctopScreen();
function locationn(){
    // console.log(windtow.location.hostname);
    console.log(location.hostname);
    console.log(location.host);
    console.log(location.href);
    console.log(location.origin);
    console.log(location.pathname);
    console.log(location.port);
    console.log(location.protocol);
}
locationn();

function isOnlinee(){
    if(navigator.onLine){
        console.log("Online");
    }else{
        console.log("Offline");
    }
}
isOnlinee();



function testStorage(){
    
    localStorage.setItem("Name","Anes Kostreba");
    sessionStorage.setItem("name","Marko");
    localStorage.getItem("name");
    localStorage.removeItem("name");
}

function openURL(){
    window.open('http://www.google.com');
}

// alert("Hello World");


// function ppp(){
//     alert('Hello World');
// }
// setTimeout(ppp,3000);

// function interval(){
//     alert("Hellooo");
// }
// setInterval(interval,3000);

function reloadPage(){
    location.reload();
}

testStorage();