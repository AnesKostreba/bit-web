var url = "https://api.github.com/search/users?q=";
var input = $("input");
var cardHolder = $('.cardHolder');
console.log("AAAAAA");

function search(input){
    $.ajax({
        url:`${url}${input}`,
        method: "GET",
    }).done(function(response){
        cardHolder.html("");
        if(response.items.length == 0){
            errorElement.text("No results");
            return;
        }
        
        // response.items.forEach(item){
        //     var card = $(`<div class='col-4'><div class='card'><img src='${item.avatar_url}'><div class='card-body'>
        //     <h5 class='card-title'> ${item.login}</h5> 
            
        //     </div></div>`)
        //     cardHolder.append(card);
        // }
    })
};