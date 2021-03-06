const Letter = require("./Letter.js");

const Word = function (wordArray) {
  this.wordArray = wordArray,
    this.guessesLeft = 10;
  this.wordDisplay =
    function wordDisplay() {
      console.log(wordArray.join(" ") + "\n");
    }
  this.guessed =
    function guessed() {
      let correctLetter = false;
      for (i = 0; i < this.wordArray.length; i++) {
        if (correctLetter !== wordArray[i].guessedCorrect()) {
          correctLetter = true;
        }
      }

      if (correctLetter) {
        console.log("\n" + "CORRECT!" + "\n");
      } else {
        console.log("\n" + "INCORRECT!" + "\n");
        this.guessesLeft--;
        console.log(this.guessesLeft + " incorrect guesses left!" + "\n");
      }
      console.log(wordArray.join(" ") + "\n");
    }
}

Letter.prototype.toString = function () {
  const revealedToString = this.showLetter + "";
  const hiddenToString = this.hideLetter + "";
  if (this.guessedYet) {
    return revealedToString;
  } else {
    return hiddenToString;
  }
}

module.exports = Word;