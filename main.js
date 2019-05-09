var minNum = document.querySelector('.min-range').value;
var maxNum = document.querySelector('.max-range').value;

// minNum = parseInt(minNum, 10);
// maxNum = parseInt(maxNum, 10);

var guessNum = getRandomNumber(minNum, maxNum);
var updateButton = document.querySelector('.set-range-button');


function getRandomNumber(min, max) {
    var randNum = Math.random() * (max - min) + min;
    randNum = Math.floor(randNum);
    return randNum;
}

console.log(guessNum);
updateButton.addEventListener('click', getRandomNumber);

