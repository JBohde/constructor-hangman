var Letter = require("./Letter.js");

var Word = function(wordArray) {
    this.wordArray = wordArray,
    this.wordDisplay =
      function wordDisplay() {
        console.log(wordArray.join(" "));
      }
    this.guessed =
      function guessed() {
          for(i = 0; i < wordArray.length; i++) {
            wordArray[i].guessedCorrect();
            wordArray[i].letterDisplay();
          }
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

  // var c = new Letter('c');
  // var a = new Letter('a');
  // var t = new Letter('t');
  // var testWord = new Word ([c, a, t]);
  //  testWord.wordDisplay();
  //  testWord.guessed();

 module.exports = Word;