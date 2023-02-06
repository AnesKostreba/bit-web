// alert("Hello World!");
$('li:nth-child(1)').css('border-bottom','1px solid red');
$('li').css('text-transform','uppercase');
$('li.active').css('color','red');
$('li:nth-child(2)').css('background-color','yellow');


$('body').after('<div></div>');
$('div').attr('id','galery');
$('#galery').append('<img></img>');
$('#galery').append('<img></img>');
$('#galery').append('<img></img>');
$('#galery').append('<img></img>');


$('img:first').css({'background-color':'black','width':'100px','height':'150px'});
$('img:nth-child(2)').css({'background-color':'yellow','width':'130px','height':'110px'});
$('img:nth-child(3)').css({'background-color':'blue','width':'130px','height':'40px'});
$('img:last').css({'background-color':'red','width':'130px','height':'140px'});
$('#galery').before('<h1>Amazing Galery</h1>');
$('h1').css({'color':'red', 'text-align' :'center'})