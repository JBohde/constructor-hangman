let userGuess = process.argv[2];

    var Letter = function(revealedLetter, guessedYet) {
     this.revealedLetter = revealedLetter,
     this.hiddenLetter = "_",
     this.guessedYet = false,
     this.letterDisplay =  
        function letterDisplay() {
          if(this.guessedYet) {
            console.log(this.revealedLetter);
            console.log("I'll show you now!");
          } else {
            console.log(this.hiddenLetter);
            console.log("Still hidden!");
          }
        }
     this.guessedCorrect =  
        function guessedCorrect() {
          if(userGuess === this.revealedLetter) {
            console.log("you're right!");
            this.guessedYet = true;
          }
          // console.log("you're wrong!");
        }
    }

  // var testLetter = new Letter ("a", "_", false);
  // console.log(testLetter.revealedLetter);
  // console.log(testLetter.hiddenLetter);
  // console.log(testLetter.guessedYet);
 
  // testLetter.letterDisplay();
  // testLetter.guessedCorrect();

module.exports = Letter;