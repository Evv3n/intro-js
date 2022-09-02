let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

var guess;

console.log(guess == correctNumber);

if (guess === correctNumber) { 
    console.log("Correct!")
}
    else if (guess < correctNumber) {
        console.log("Too low!")
    } else if (guess > correctNumber);

