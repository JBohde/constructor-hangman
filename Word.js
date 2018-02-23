var Letter = require("./Letter.js");
let userGuess = process.argv[2];

var Word = function(wordArray) {
    this.wordArray = wordArray,
    this.wordDisplay =
      function wordDisplay() {
        for (i = 0; i < wordArray.length; i++){
          wordArray[i].letterDisplay();
        }
        console.log(wordArray.join(" "));
      }
    this.guessed =
      function guessed() {
        // if(userGuess) {
          for(i = 0; i < wordArray.length; i++) {
            wordArray[i].guessedCorrect();
          }
        // }
      }
}

Letter.prototype.toString = function() {
    var revealedToString = this.revealedLetter + "";
    var hiddenToString = this.hiddenLetter + "";
    if (this.guessedYet) {
      return revealedToString;
    } else {
      return hiddenToString;
    }
}

  var c = new Letter('c');
  var a = new Letter('a');
  var t = new Letter('t');

  var testWord = new Word ([c, a, t]);

  // console.log(testWord.wordArray);
  // console.log(testWord.wordArray.join());
  console.log(testWord.wordDisplay());
  console.log(testWord.guessed());