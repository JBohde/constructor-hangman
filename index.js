const Letter = require("./Letter.js");
const Word = require("./Word.js");
const inquirer = require('inquirer');
  
  // Create an array of letters the computer can choose
  const letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Word selection array
  const wordBank = [`baltimore orioles`, `boston red sox`, `chicago white sox`, `cleveland indians`, `detroit tigers`, `houston astros`, `kansas city royals`, `los angeles angels`,
                    `minnesota twins`, `new york yankees`, `oakland athletics`, `seattle mariners`, `tampa bay rays`, `texas rangers`, `toronto blue jays`, `arizona diamondbacks`,
                    `atlanta braves`, `chicago cubs`, `cincinnati reds`, `colorado rockies`, `los angeles dodgers`, `miami marlins`, `milwaukee brewers`, `new york mets`, `philadelphia phillies`,
                    `pittsburgh pirates`, `san diego padres`, `san francisco giants`, `saint louis cardinals`, `washington nationals`];
  // Choose random word

  let gameWord = [];

  function initializeGame() {
  //reset game
    console.log("*******WELCOME TO HANGMAN*******");
    console.log("*******MAJOR LEAGUE BASEBALL TEAMS*******");
    getNewWord();
    let word = getNewWord();
    gameWord = [];
    // *******IF YOU WANT TO REVEAL THE WORD******* //
    // console.log(word);
    for (i = 0; i < word.length; i++) {
      letter = word[i].valueOf();
      letter = new Letter(letter);
        if (letter.showLetter === " ") {
          letter.hideLetter = " ";
          letter.guessedYet = true;
        }
      gameWord.push(letter)
    }
    gameWord = new Word(gameWord);
    gameWord.wordDisplay();
    askLetter();
  }

  function getNewWord() {
    let randomNum = Math.floor(Math.random() * wordBank.length);
    let word = wordBank[randomNum].split("");
    // Randomly chooses a team from the wordBank array.
    return word;
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
        checkWin();
    });
  }

  function checkWin() {
    //Checks to see if all guessedYet are true
    var correctTotal = true;
    for (i = 0; i < gameWord.wordArray.length; i++) {

      if(correctTotal !== gameWord.wordArray[i].guessedYet) {
        correctTotal = false;
      }
    }
    if(correctTotal) {
        console.log("\n" + "YOU WIN!");
        playAgain();

    } else if (gameWord.guessesLeft === 0) { 
        console.log("\n" + "GAME OVER");
        playAgain();

    } else {
      askLetter();
    }
  }

  function playAgain() {
    inquirer.prompt({
      type: 'list',
      name: 'play_again',
      message: "Would you like to play again?",
      choices: ["Yes", "No"]
  
    }).then(answers => {
        if (answers.play_again === "Yes") {
          initializeGame();
        } else if (answers.play_again === "No") {
          console.log("\n" + "Thanks for playing! Come back soon!");
         return
        }
    });
  }

  initializeGame();