'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const currectNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighScore = document.querySelector('.highscore');

checkBtn.addEventListener('click', function () {
  let guessNumber = Number(guessInput.value);
  //   validation
  if (!guessNumber) {
    alert('Give a valid number..');
  } else if (guessNumber > 20 || guessNumber < 0) {
    alert('Give the number Between 1 to 20');
  }
  // if guess currect
  else if (secretNumber === guessNumber) {
    currectNumber.innerText = secretNumber;
    message.innerText = '🎉 Congratulations...';
    score--;
    labelScore.innerText = score;
    if (score > highScore) {
      highScore = score;
      labelHighScore.innerText = highScore;
    }
    document.body.style.backgroundColor = 'green';
  }
  //   Too High
  else if (secretNumber < guessNumber) {
    if (score > 1) {
      message.innerText = '📈 Too High...';
      score--;
      labelScore.innerText = score;
    } else {
      message.innerText = '😢 You Have Lost.';
    }
  }
  //   too low
  else if (secretNumber > guessNumber) {
    if (score > 1) {
      message.innerText = '📉 Too Low...';
      score--;
      labelScore.innerText = score;
    } else {
      message.innerText = '😢 You Have Lost.';
    }
  }
  console.log(guessNumber, typeof guessNumber);
});

// Again Button Click
againBtn.addEventListener('click', function () {
  guessInput.value = '';
  score = 20;
  labelScore.innerText = score;
  message.innerText = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  currectNumber.innerText = '?';
});
