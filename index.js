var Letter = require("./Letter.js");
var Word = require("./Word.js");
var inquirer = require('inquirer');
  
  // Create an array of letters the computer can choose
  var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Word selection array
  const wordBank = [`wicked weed`, `foothills`, `fortknight`, `big boss`, `ponysaurus`, `mystery`, `aviator`, `catawba`];
  // Choose random word
  var randomNum = Math.floor(Math.random() * wordBank.length);
  var word;
  var gameWord = [];
  var correctGuesses;
  var totalGuesses;

  function initializeGame() {
	//reset game
    word = wordBank[randomNum].split(""); 
    console.log(word);
    for (i = 0; i < word.length; i++) {
        letter = word[i].valueOf();
        letter = new Letter(letter);
        gameWord.push(letter)
    }
    gameWord = new Word(gameWord);
    gameWord.wordDisplay();
    guessesLeft = 10;
    askLetter();
  }

  function askLetter() {
    inquirer.prompt({
        type: 'input',
        name: 'letter',
        message: "Guess a Letter!",
        choices: letterChoices

    }).then(answers => {
        userGuess = answers.letter;
        gameWord.guessed();
        guessesLeft--;
        console.log(guessesLeft + " guesses left!"  + "\n");
        askLetter();
        if (guessesLeft === 0) { 
          console.log("GAME OVER");

          inquirer.prompt({

            type: 'list',
            name: 'play_again',
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        
          }).then(answers => {
              if (answers.play_again === "Yes") {
                return;
              } else if (answers.play_again === "No") {
                console.log("Thanks for playing! Try again soon!");
                return;
              }
          });
        }
    });
}

  initializeGame();