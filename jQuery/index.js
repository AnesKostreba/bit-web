// alert("Hello World!");
$('li:nth-child(1)').css('border-bottom','1px solid red');
$('li').css('text-transform','uppercase');
$('li.active').css('color','red');

$('li').each(function(index,element){
    if($(this).index()){
        
    }
    console.log($(this).index());
});