'use strict';

let secretNumber = Math.round(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

let habarJonat = function (xabar) {
  document.querySelector('.message').innerHTML = xabar;
};

let check = document.querySelector('.check');
check.addEventListener('click', aniqlanganXabar);

function aniqlanganXabar() {
  const taxminRaqam = document.querySelector('.guess').value;
  if (score > 0) {
    document.querySelector('.score').textContent = --score;
  }
  if (taxminRaqam == secretNumber) {
    habarJonat('Qoyil siz topdingiz 🎉');
    document.querySelector('body').style = 'background-color: green;';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore + 1;
    }
  } else if (taxminRaqam > secretNumber) {
    habarJonat('Siz oylangan son katta 📈');
  } else if (taxminRaqam < secretNumber) {
    habarJonat('Siz oylangan son kichkina 📉');
  }
  if (score == 0) {
    habarJonat('Game Over 💥');
  }
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20) + 1;
  habarJonat('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});