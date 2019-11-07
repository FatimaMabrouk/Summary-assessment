

$('#creat').on('click', function(){
  if($("#checked").prop('checked')){
  	$('ul').add('<li>black</li>');
    $('li').css('color', 'black');
    else if($("#check1").prop('checked') && $("#check1").prop('checked')) {
     $('li').css('color','purpul');
    }
    else if($("#check2").prop('checked')){
     $('li').css('color','purpul');
    }
}
});
$('#remove').on('click',function(){
	if($("#checked").prop('checked')) {
		$('li').remove();
	}
	// the same idae 
	// if the cheched select when we click in butten it well be remove from li
})

$('#remove').on('click',function(e){
	alert('check');
});
$('body').css('background-color','lightblue');

