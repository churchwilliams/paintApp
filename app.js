$(document).ready(function(){

	var color = 'white';
	var colors= 'red green blue yellow white';

	$('#red').on('click', function(){
		color = 'red';
	});
	$('#green').on('click', function(){
		color = 'green';
	});
	$('#blue').on('click', function(){
		color = 'blue';
	});
	$('#yellow').on('click', function(){
		color = 'yellow';
	});
	$('#white').on('click', function(){
		color = 'white';
	});

	//#box
	$('.box').on('click', function(){
		$(this).addClass(color);
	});
	$('.box').on('dblclick', function(){
		$(this).removeClass(color);
	});


	//reset
	$('#reset').on('click', function(){
		$('.box').removeClass(colors);
		color ='white';
	});

	

	
});

