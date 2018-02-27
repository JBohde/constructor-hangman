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
        
        // if (this.guessedYet) {
        //   console.log("CORRECT!" + "\n");
        // }
        // if (wordArray.indexOf(userGuess) === -1) {
        //   console.log("INCORRECT!" + "\n");
        //   // guessesLeft--;
        // } else if (wordArray.indexOf(userGuess) > -1){
        //   console.log("CORRECT!" + "\n");
        // }
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

 module.exports = Word;