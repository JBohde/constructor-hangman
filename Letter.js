  
  var Letter = function(showLetter) {
     this.showLetter = showLetter,
     this.hideLetter = "_",
     this.guessedYet = false,
     this.letterDisplay =  
        function letterDisplay() {
          if(this.guessedYet) {
            console.log(this.showLetter);
          } else {
            console.log(this.hideLetter);
          }
        }
     this.guessedCorrect =  
        function guessedCorrect() {
          if(userGuess === this.showLetter) {
            this.guessedYet = true;
          }
          // console.log("INCORRECT");
        }
    }

  // var testLetter = new Letter ("a", "_", false);
  // console.log(testLetter.showLetter);
  // console.log(testLetter.hideLetter);
  // console.log(testLetter.guessedYet);
  // testLetter.letterDisplay();
  // testLetter.guessedCorrect();

module.exports = Letter;