const Letter = function (showLetter) {
  this.showLetter = showLetter,
    this.hideLetter = "_",
    this.guessedYet = false,
    this.letterDisplay =
    function letterDisplay() {
      if (this.guessedYet) {
        console.log(this.showLetter);
      } else {
        console.log(this.hideLetter);
      }
    }
  this.guessedCorrect =
    function guessedCorrect() {
      if (userGuess === this.showLetter) {
        this.guessedYet = true;
        return true;
      } else {
        return false;
      }
    }
}

module.exports = Letter;