//create the array of animal words
var wordBank = [
  "dog",
  "cat",
  "owl",
  "turtle",
  "rabbit",
  "giraffe",
  "monkey",
  "horse",
  "bird",
  "platypus"
];

//set up the rest of the variables
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randomWord;
var winCounter = 0;

//functions
function startGame() {
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  for (var i = 0; i < randomWord.length; i++) {
    underScores.push("_");
  }
  //printing the underscores to the screen for the words

  document.getElementById("underScores").textContent = underScores.join(" ");

  //reset wrong letters
  wrongLetter = [];
  guessesLeft = 9;
}
function winLose()
{
if(winCounter === randomWord.length){
  alert("Winner!!!!!");
  startGame();
}
else if(guessesLeft === 0){
  alert("Oops, you lost!");
  startGame();
}
}
//User guessing
document.onkeyup = function(event) 
{
  userGuesses = event.key;
  //seeing if the letter guess lives inside the word
  if (randomWord.indexOf(userGuesses) > -1)
   {
    for (var i = 0; i < randomWord.length; i++) 
    {
      if (randomWord[i] === userGuesses)
       {
        underScores[i] = userGuesses;
        winCounter++;
        winLose();
      }
    }
  } 
  else 
  {
    wrongLetter.push(userGuesses);
    guessesLeft--;
    winLose();
   }
}

//game main
startGame();
