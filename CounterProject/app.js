var counter = document.getElementById("counter");
var countVal = parseInt(counter.innerHTML);

function lowerCount(){
	countVal = countVal - 1;
	counter.innerHTML = countVal;
}

function addCount(){
	countVal = countVal + 1;
	counter.innerHTML = countVal;
}