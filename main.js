	//GLOBAL VARIABLES //

var guessNum = getRandomNumber(1, 100);
console.log(guessNum);
var playerOne = document.querySelector('.player-one').value;
var playerTwo =document.querySelector('.player-two').value;
var updateButton = document.querySelector('.set-range-button');
var guessButton = document.querySelector('.guess-button');


	// EVENT LISTENERS // 
updateButton.addEventListener('click', convertMinMax);
guessButton.addEventListener('click',)

	// GLOBAL FUNCTIONS // 

function getRandomNumber(min, max) {
    var randNum = Math.random() * (max - min) + min;
    randNum = Math.floor(randNum);
    return randNum;
    // creates random number for guessNum on page load
}

function convertMinMax() {
	var minNum = document.querySelector('.min-range').value;
  	var maxNum = document.querySelector('.max-range').value;
  	updateMinMaxHtml(minNum, maxNum);
  	updateRandomNumber(minNum, maxNum);
  	// .updateButton - takes min/max values and passes them
}

function updateMinMaxHtml(min, max) {
	var start = document.querySelector('.start-range');
	var end = document.querySelector('.end-range');
	start.innerText = min;
	end.innerText = max;
	// Updates HTML with new min/max values
}

function updateRandomNumber(min, max) {
    var newNum = Math.random() * (max - min) + min;
    newNum = Math.floor(newNum);
    guessNum = newNum;
    console.log(guessNum);
    // updates guessNum with user min/max values
}

