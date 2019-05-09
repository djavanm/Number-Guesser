/* On Page Load */
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
  	updateRandomNumber(minNum, maxNum);
}

function updateRandomNumber(min, max) {
    var newNum = Math.random() * (max - min) + min;
    newNum = Math.floor(newNum);
    guessNum = newNum;
    console.log(guessNum);
}
