'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let highScore = 0;

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let inputNum = document.querySelector('.guess').value;

  //no number entered
  if (!inputNum) {
    displayMessage('⛔ No Number Entered !');

    //winning condtion
  } else if (inputNum == secretNum) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNum;
    displayMessage('🎉 Correct Number! ');

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputNum !== secretNum && score > 1) {
    //guess less than or grater than secret Number
    if (inputNum < secretNum) {
      displayMessage('📉 Too Low! Try again!');
    } else if (inputNum > secretNum) {
      displayMessage('📈 Too High! Try again !');
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score <= 1) {
    displayMessage('🤷‍♀️ You Lost the Game');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = null;
});
