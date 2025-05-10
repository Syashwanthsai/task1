// Function to get user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Invalid input! Please choose rock, paper, or scissors.');
    }
  };
  
  // Function to get computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'BOOM! You win with the secret cheat code!';
    }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
    }
  
    if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
    }
  
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
    }
  };
  
  // Function to start the game
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // You can change this to 'paper', 'scissors', or 'bomb'
    const computerChoice = getComputerChoice();
  
    if (userChoice) {
      console.log(`You chose: ${userChoice}`);
      console.log(`The computer chose: ${computerChoice}`);
      console.log(determineWinner(userChoice, computerChoice));
    }
  };
  
  // Start the game
  playGame();
  