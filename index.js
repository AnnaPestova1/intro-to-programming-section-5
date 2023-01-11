const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
const wrongLow = document.getElementById('wrong-low');
const wrongHigh = document.getElementById('wrong-high');
const notANumber = document.getElementById('nan')
const tooHighEndMessage  = document.getElementById('too-high-end');
const tooLowEndMessage = document.getElementById('too-low-end');

let targetNumber;
let attempts;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;
  const remainingAttempts = maxNumberOfAttempts - attempts;

  hideAllMessages();
  if (remainingAttempts === 1) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> 1 guess remaining`;
  }
  else {
    numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
   
  }

  if (guess === targetNumber) {
    if (attempts === 1) {
      numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guess`;
    }
    else {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    }
    tooLowMessage.style.display = 'none';
    tooHighMessage.style.display = 'none';
    maxGuessesMessage.style.display='none';
    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }



  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } 
  
    else {
      tooHighMessage.style.display = '';
    }

    }


    
    

   
   if (guess<=0) {
    hideAllMessages();
    wrongLow.style.display = '';
    
  }
  if (guess>=100) {
    hideAllMessages();
    wrongHigh.style.display = '';
  }

  if (attempts === maxNumberOfAttempts) {
    if (guess < targetNumber) {
      tooLowEndMessage.style.display = '';
      tooHighMessage.style.display = 'none';
      maxGuessesMessage.style.display='';
    } 
  
    if (guess > targetNumber) {
      tooHighEndMessage.style.display = '';
      tooLowMessage.style.display = 'none';
      maxGuessesMessage.style.display='';
    }
    
      submitButton.disabled = true;
    guessInput.disabled = true;

  }


  if (isNaN(guess)) {
    hideAllMessages();
notANumber.style.display='';
  }

  guessInput.value = '';

  resetButton.style.display = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
  wrongLow.style.display = 'none';
  wrongHigh.style.display = 'none';
  notANumber.style.display = 'none';
  resetButton.style.display="none";
}

function setup() {
  // Get random number
 targetNumber = getRandomNumber(1, 99);
console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
attempts = 0; 

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

