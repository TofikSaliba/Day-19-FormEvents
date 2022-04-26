//! get elements
const letter = document.querySelector("#letter");
const msg = document.querySelector(".msg");
const guesses = document.querySelector(".guesses");
const playAgain = document.querySelector("#playAgain");

//! vars to use
const alphabet = "abcdefghijklmnopqrrstuvwxyz";
let guessed = "";
let letterToGuess = alphabet[Math.floor(Math.random() * 26)];
let flag = false;

//! input key press listener
window.addEventListener("keypress", (e) => {
  let pressed = e.key.toLowerCase();
  if (flag) return;
  msg.style.color = "red";

  if (alphabet.indexOf(pressed) === -1) {
    //! if input is not a letter
    msg.innerText = "please enter a valid letter";
  } else if (guessed.indexOf(pressed) !== -1) {
    //! if input is already guessed
    msg.innerText = `${pressed} has already been guessed!`;
  } else if (pressed === letterToGuess) {
    //! input is the right guess !
    msg.innerText = "Right letter!";
    msg.style.color = "green";
    letter.innerText = letterToGuess;
    guesses.innerText = "Would you like to play again?";
    playAgain.style.display = "inline-block";
    flag = true;
  } else {
    //! input is wrong guess
    msg.innerText = "Nope, wrong letter";
    if (!guessed) {
      guessed += pressed;
    } else {
      guessed += "," + pressed;
    }
    guesses.innerText = guessed;
  }
});

//! play again button
playAgain.addEventListener("click", () => {
  flag = false;
  playAgain.style.display = "none";
  msg.style.color = "black";
  msg.innerText = "Guess a letter";
  guessed = "";
  guesses.innerText = guessed;
  letter.innerText = "?";
  letterToGuess = alphabet[Math.floor(Math.random() * 26)];
});
