/* GLOBALS*/
var guessNum = getRandomNumber(1, 100);
console.log(guessNum);
var updateButton = document.querySelector('.set-range-button');

function getRandomNumber(min, max) {
    var randNum = Math.random() * (max - min) + min;
    randNum = Math.floor(randNum);
    return randNum;
}

updateButton.addEventListener('click', convertMinMax);

function convertMinMax() {
	var minNum = document.querySelector('.min-range').value;
  	var maxNum = document.querySelector('.max-range').value;
  	updateMinMaxHtml(minNum, maxNum);
  	updateRandomNumber(minNum, maxNum);
}

function updateMinMaxHtml(min, max) {
	var start = document.querySelector('.start-range');
	var end = document.querySelector('.end-range');
	start.innerText = min;
	end.innerText = max;
}

function updateRandomNumber(min, max) {
    var newNum = Math.random() * (max - min) + min;
    newNum = Math.floor(newNum);
    guessNum = newNum;
    console.log(guessNum);
}
