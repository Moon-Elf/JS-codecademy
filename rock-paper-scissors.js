const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
      return userInput;
    } else {
      console.log('Error!')
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
       return 'rock';
       break;
      case 1:
       return 'paper';
       break;
      case 2:
       return 'scissors';
       break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice==='bomb') {
      return 'You won';
    }
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
    if (userChoice==='rock') {
      if (computerChoice==='paper') {
        return 'The Computer Won!';
      } else {
        return 'You Won';
      }
    }
    if (userChoice==='paper') {
      if (computerChoice==='scissors') {
        return 'The Computer Won!';
      } else {
        return 'You Won';
      }
    }
    if (userChoice==='scissors') {
      if (computerChoice==='rock') {
        return 'The Computer Won!';
      } else {
        return 'You Won';
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    console.log(userChoice)
    const computerChoice = getComputerChoice();
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame();