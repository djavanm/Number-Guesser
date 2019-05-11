	// GLOBAL VARIABLES //
var guessNum = getRandomNumber(1, 100);
var playerOne;
var playerTwo;
var p1Guess;
var p2Guess;
var playerOneName;
var playerTwoName;
var updateButton = document.querySelector('.set-range-button');
var guessButton = document.querySelector('.guess-button');
var p1GuessHint = document.querySelector('.p1-guess-hint');
var p2GuessHint = document.querySelector('.p2-guess-hint');
var clearButton = document.querySelector('.clear-button');

 // Guess Number on refresh! // 
 console.log(guessNum);

	// EVENT LISTENERS // 
updateButton.addEventListener('click', convertMinMax);
guessButton.addEventListener('click', submitPlayerNames);
clearButton.addEventListener('click', clearFieldButton);


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
	p1Guess = parseInt(document.querySelector('.player-one-guess').value);
	p2Guess = parseInt(document.querySelector('.player-two-guess').value);
	updateGuessHTML(p1Guess, p2Guess);
	console.log(p1Guess);
	console.log(p2Guess);
	p1CheckGuess();
	p2CheckGuess();
	// assigns new values to p1guess and p2guess
}

function updateChallengerHTML(player1, player2) {
	playerOneName = document.querySelector('.player-one-name');
	playerTwoName = document.querySelector('.player-two-name');
	playerOneName.innerText = player1;
	playerTwoName.innerText = player2;
	// Updastes HTML with new player name values
}

function updateGuessHTML(player1, player2) {
	var playerOneGuess = document.querySelector('.p1-guess-num');
	var playerTwoGuess = document.querySelector('.p2-guess-num');
	playerOneGuess.innerText = player1;
	playerTwoGuess.innerText = player2;
	// Adds guess number HTML 
}

function p1CheckGuess() {
  if(p1Guess === guessNum) {
  	p1GuessHint.innerText = 'You win!';
    console.log('Player one wins!');
  } else if(p1Guess < guessNum) {
  	p1GuessHint.innerText = "that's too low!";
    console.log('player 1 is too low!');
  } else {
  	p1GuessHint.innerText = "that's too high!";
    console.log('player 1 is too high!');
  };
};
// Checks values of player one guess, returns answers and updates HTML. May refactor.


function p2CheckGuess() {
  if(p2Guess === guessNum) {
  	p2GuessHint.innerText = 'You win!';
    console.log('Player one wins!');
  } else if(p2Guess < guessNum) {
  	p2GuessHint.innerText = "that's too low!";
    console.log('Player 2 is too low!');
  } else {
  	p2GuessHint.innerText = "that's too high!";
    console.log('Player 2 is too high!');
  };
};
// Checks values of player one guess, returns answers and updates HTML. May refactor.


function clearFieldButton() {
	document.querySelector('.player-one').reset();
	document.querySelector('.player-two').reset();
	document.querySelector('.player-one-guess-form').reset();
	document.querySelector('.player-two-guess-form').reset();
	clearGuessNum();
	// Clears player & guess input fields, calls clearGuessNum to clear numbers and innher HTML
}

function clearGuessNum() {
	var playerOneGuess = document.querySelector('.p1-guess-num');
	var playerTwoGuess = document.querySelector('.p2-guess-num');
	playerOneGuess.innerText = '--';
	playerTwoGuess.innerText = '--';
	p1GuessHint.innerText = ' ';
	p2GuessHint.innerText = ' ';
	playerOneName.innerText = ' ';
	playerTwoName.innerText = ' ';
	// Clears player name HTML, Guess HTML, and guess hint HTML
}
