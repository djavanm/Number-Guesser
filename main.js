	// GLOBAL VARIABLES //
var guessNum = getRandomNumber(1, 100);
var minNum = 1;
var maxNum = 100;
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
var resetButton = document.querySelector('.reset-button');
var p1NameInput = document.querySelector('#p1');
var p2NameInput = document.querySelector('#p2');
var p1GuessInput = document.querySelector('.player-one-guess');
var p2GuessInput = document.querySelector('.player-two-guess');
var errorUpdateRange = document.querySelector('#error-range');
var p1Error = document.querySelector('#p1-error');
var p2Error = document.querySelector('#p2-error');
var p1GuessError = document.querySelector('#p1-guess-error');
var p2GuessError = document.querySelector('#p2-guess-error');

 // Guess Number on refresh! // 
 console.log(guessNum);

	// EVENT LISTENERS // 
updateButton.addEventListener('click', updateValidation);
guessButton.addEventListener('click', p1NameValidation);
clearButton.addEventListener('click', clearFieldButton);
resetButton.addEventListener('click', resetAll);
p1NameInput.addEventListener('keyup', enableClear);
p2NameInput.addEventListener('keyup', enableClear);
p1GuessInput.addEventListener('keyup', enableClear);
p2GuessInput.addEventListener('keyup', enableClear);
	
	// GLOBAL FUNCTIONS // 

function getRandomNumber(min, max) {
    var randNum = Math.random() * (max - min) + min;
    randNum = Math.floor(randNum);
    return randNum;
    // creates random number for guessNum on page load
}

function convertMinMax() {
	minNum = parseInt(document.querySelector('.min-range').value);
  	maxNum = parseInt(document.querySelector('.max-range').value);
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
	checkWinner();
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
	clearButton.disabled = false;
	resetButton.disabled = false;
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
  	p1GuessHint.innerText = 'BOOM!';
    console.log('BOOM!');
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
  	p2GuessHint.innerText = 'BOOM!';
    console.log('BOOM!');
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
	disableClear();
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

function resetAll() {
	guessNum = getRandomNumber(1, 100);
	updateMinMaxHtml(1, 100);
	console.log(guessNum);
	document.querySelector('.set-range-form').reset();
  	document.querySelector('.min-range').innerText = '1';
  	document.querySelector('.min-range').innerText = '100';
  	clearFieldButton();
  	disableReset();
  	// Reset all inputs and clear inner text
}
 
function enableClear() {
	clearButton.disabled = false;
}

function disableClear() {
	clearButton.disabled = true;
}

function disableReset() {
	resetButton.disabled = true;
}
	// Enable and Disable buttons upon use

function checkWinner() {
	console.log('Running check winner')
	if (p1Guess === guessNum) {
		var winner = playerOne.toUpperCase();
		var loser = playerTwo.toUpperCase();
		insertWinnerCard(playerOne, playerTwo);
	}
	if (p2Guess === guessNum) {
		var winner = playerTwo.toUpperCase();
		var loser = playerOne.toUpperCase();
		insertWinnerCard(playerTwo, playerOne);
	}

}
function updateValidation() {
	if (parseInt(document.querySelector('.min-range').value) > parseInt(document.querySelector('.max-range').value)) {
		errorUpdateRange.innerText = "Minimum Range must be smaller than Maximum Range.";
		console.log("This is not a valid input");
	} else {
		errorUpdateRange.innerText = "";
		convertMinMax();
	}
}

function p1NameValidation() {
	if (document.querySelector('#p1').value.length === 0) {
		p1NameInput.classList.add('error-border');
		p1Error.innerText = "Enter a name";
	}
	else {
		p1NameInput.classList.remove('error-border');
		p1Error.innerText = "";
		p2NameValidation();	
	}
}

function p2NameValidation() {
	if (document.querySelector('#p2').value.length === 0) {
		p2NameInput.classList.add('error-border');
		p2Error.innerText = "Enter a name";
	} else {
		p2NameInput.classList.remove('error-border');
		p2Error.innerText = "";
		p1GuessValidation();
	}
}

function p1GuessValidation() {

	if (isNaN(parseInt(document.querySelector('.player-one-guess').value)) || 
		parseInt(document.querySelector('.player-one-guess').value) < minNum || 
		parseInt(document.querySelector('.player-one-guess').value) > maxNum) {
		p1GuessInput.classList.add('error-border');
		p1GuessError.innerText = "Enter a number within the current range.";
	} else {
		p1GuessInput.classList.remove('error-border');
		p1GuessError.innerText = "";
		p2GuessValidation();
	}
}

function p2GuessValidation() {

	if (isNaN(parseInt(document.querySelector('.player-two-guess').value)) || 
		parseInt(document.querySelector('.player-two-guess').value) < minNum || 
		parseInt(document.querySelector('.player-two-guess').value) > maxNum) {
		p2GuessInput.classList.add('error-border');
		p2GuessError.innerText = "Enter a number within the current range.";
	} else {
		p2GuessInput.classList.remove('error-border');
		p2GuessError.innerText = "";
		submitPlayerNames();
	}
}


// function guessValidation() {
// 	if (isNaN(parseInt(document.querySelector('.player-one-guess').value)) || 
// 		(isNaN(parseInt(document.querySelector('.player-two-guess').value)) || 
// 		parseInt(document.querySelector('.player-one-guess').value) < minNum || 
// 		parseInt(document.querySelector('.player-one-guess').value) > maxNum  ||
// 		parseInt(document.querySelector('.player-two-guess').value) < minNum ||
// 		parseInt(document.querySelector('.player-two-guess').value) > maxNum)) {
// 		p1GuessError.innerText = "Please enter a number within the designated range.";
// 		p2GuessError.innerText = "Please enter a number within the designated range";
// 		console.log("This is not a valid input")
// 	} else {
// 		p1GuessError.innerText = "";
// 		p2GuessError.innerText = "";
// 		submitPlayerNames();
// 	}
// }

// function guessValidation() {

// 	if (isNaN(parseInt(document.querySelector('.player-one-guess').value)) || 
// 		parseInt(document.querySelector('.player-one-guess').value) < minNum || 
// 		parseInt(document.querySelector('.player-one-guess').value) > maxNum) {
// 		p1GuessError.innerText = "Enter a number within current range";
// 	} 

// 	if (isNaN(parseInt(document.querySelector('.player-two-guess').value)) ||
// 		parseInt(document.querySelector('.player-two-guess').value) < minNum ||
// 		parseInt(document.querySelector('.player-two-guess').value) > maxNum) {
// 		p2GuessError.innerText = "Enter a number within current range";
// 	} else {
// 		p1GuessError.innerText = "";
// 		p2GuessError.innerText = "";
// 		submitPlayerNames();
// 	}
// }

function insertWinnerCard(winner, loser) {
	let aside = document.querySelector('aside');
	aside.insertAdjacentHTML('afterbegin', `<article class="results">
      <p><span class="player-one-vs">${winner}</span> <span class="vs"> VS</span> <span class="player-two-vs">${loser}</span></p>
      <div class="challenger-container">
	      <h3 class="winner">${winner}</h3>
        <h3 class="winner-banner">WINNER</h3>
      </div>
    </article>`)

}
