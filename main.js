	// GLOBAL VARIABLES //

var guessNum = getRandomNumber(1, 100);
console.log(guessNum);
var playerOne;
var playerTwo;
var p1Guess;
var p2Guess;
var updateButton = document.querySelector('.set-range-button');
var guessButton = document.querySelector('.guess-button');


	// EVENT LISTENERS // 
updateButton.addEventListener('click', convertMinMax);
guessButton.addEventListener('click', submitPlayerNames);

	// GLOBAL FUNCTIONS // 

function getRandomNumber(min, max) {
    var randNum = Math.random() * (max - min) + min;
    randNum = Math.floor(randNum);
    return randNum;
    // creates random number for guessNum on page load
}

function convertMinMax() {
	var minNum = parseInt(document.querySelector('.min-range').value);
  	var maxNum = parseInt(document.querySelector('.max-range').value);
  	updateMinMaxHtml(minNum, maxNum);
  	updateRandomNumber(minNum, maxNum);
  	// .updateButton - takes min/max values and passes them as integers
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

function submitPlayerNames() {
	playerOne = document.querySelector('#p1').value;
	playerTwo = document.querySelector('#p2').value;
	console.log(playerOne);
	console.log(playerTwo);
	updateChallengerHTML(playerOne, playerTwo)
	submitGuess();
	// assigns new values to player one and player two
	// invokes submitGuess to assign guesses
}

function submitGuess() {
	p1Guess = document.querySelector('.player-one-guess').value;
	p2Guess = document.querySelector('.player-two-guess').value;
	updateGuessHTML(p1Guess, p2Guess);
	console.log(p1Guess);
	console.log(p2Guess);
	// assigns new values to p1guess and p2guess
}

function updateChallengerHTML(player1, player2) {
	var playerOneName = document.querySelector('.player-one-name');
	var playerTwoName = document.querySelector('.player-two-name');
	playerOneName.innerText = player1;
	playerTwoName.innerText = player2;
	// Updastes HTML with new player name values
}

function updateGuessHTML(player1, player2) {
	var playerOneGuess = document.querySelector('.p1-guess-num');
	var playerTwoGuess = document.querySelector('.p2-guess-num');
	playerOneGuess.innerText = player1;
	playerTwoGuess.innerText = player2;
}




