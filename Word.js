var Letter = require("./Letter.js");

var Word = function(wordArray) {
    this.wordArray = wordArray,
    this.wordDisplay =
      function wordDisplay() {
        console.log(wordArray.join(" ") + "\n");
      }
    this.guessed =
      function guessed() {
        for(i = 0; i < this.wordArray.length; i++) {
          wordArray[i].guessedCorrect();
        }
        console.log(wordArray.join(" ") + "\n");
      }
}

Letter.prototype.toString = function() {
    var revealedToString = this.showLetter + "";
    var hiddenToString = this.hideLetter + "";
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