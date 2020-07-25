//wrap code in IIFE(Immediately Invoked Function Expression)
(function(){

	var screen = document.querySelector('.screen');
	var buttons = document.querySelectorAll('.btn');
	var equal = document.querySelector('.btn-equal');
	var clear = document.querySelector('.btn-clear');
	
	buttons.forEach(function(button){
		button.addEventListener('click',function(e){
			let value = e.target.dataset.num;
			screen.value += value;
		})
	});
	
	equal.addEventListener('click',function(e){
		if(screen.value === '')
			screen.value = 'Please enter an expression'; 
		else
			screen.value = eval(screen.value);
	});
	
	clear.addEventListener('click', function(e){
		screen.value = '';
	});		
})();