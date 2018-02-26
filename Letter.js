  var Letter = function(revealedLetter) {
     this.revealedLetter = revealedLetter,
     this.hiddenLetter = "_",
     this.guessedYet = false,
     this.letterDisplay =  
        function letterDisplay() {
          if(this.guessedYet) {
            console.log(this.revealedLetter);
          } else {
            console.log(this.hiddenLetter);
          }
        }
     this.guessedCorrect =  
        function guessedCorrect() {
          if(userGuess === this.revealedLetter) {
            this.guessedYet = true;
          }
          console.log("INCORRECT");
        }
    }

  // var testLetter = new Letter ("a", "_", false);
  // console.log(testLetter.revealedLetter);
  // console.log(testLetter.hiddenLetter);
  // console.log(testLetter.guessedYet);
  // testLetter.letterDisplay();
  // testLetter.guessedCorrect();

module.exports = Letter;