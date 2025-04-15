let gameLock = false;
const rockUser = document.getElementById('rock-img');
const paperUser = document.getElementById('paper-img');
const scissorsUser = document.getElementById('scissors-img');
const jsTalk = document.getElementById('p2');
const jsContainer = document.getElementById('js-container');
const result = document.getElementById('result-container')
const winner = document.getElementById('p-result')
const jsChoice = document.getElementById('js-select')
const x = document.getElementById('x-mark')

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0 :
            return 'rock';
        case 1 :
            return 'paper';
        case 2 :
            return 'scissors';
    }
}

function determineWinner (userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'The computer won!'; 
        } else {
            return 'You Won!';
        }
    }
    if (userChoice === 'paper') {
        if(computerChoice === 'scissors'){
            return 'The computer won!';
        } else {
            return 'You Won!';
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'The computer won!';
        } else {
            return 'You Won!';
        }
    }
}



const playGame = (userChoice, computerChoice) => {    
    
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
    winner.innerHTML = determineWinner(userChoice, computerChoice)
  };


  function JSBox(finalChoice) {
    jsContainer.style.display = 'flex';
    jsChoice.innerHTML = '';
    
    let img = document.createElement('img');
    let choices = ['rock', 'paper', 'scissors'];

    const flipInterval = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        img.src = `../Main page/resources/${randomChoice}.svg`;
        jsChoice.innerHTML = '';
        jsChoice.appendChild(img);
    }, 100);

    setTimeout(() => {
        clearInterval(flipInterval);
        img.src = `../Main page/resources/${finalChoice}.svg`;
        jsChoice.innerHTML = '';
        jsChoice.appendChild(img);
        console.log("Computer Choice:", finalChoice);
    }, 1000);
}





rockUser.addEventListener('click', () => {
    if(gameLock)return
    jsTalk.style.display = 'block';
    const computerChoice = getComputerChoice();
    playGame('rock', computerChoice);
    setTimeout(() => result.style.display = 'flex', 850);
    JSBox(computerChoice);
    gameLock = true;
 }) 
  paperUser.addEventListener('click', () => {
    if(gameLock)return
    jsTalk.style.display = 'block';
    const computerChoice = getComputerChoice();
    playGame('paper', computerChoice);
    setTimeout(() => result.style.display = 'flex', 850);
    JSBox(computerChoice);
    gameLock = true;
})
  scissorsUser.addEventListener('click', () => {
    if(gameLock)return
    jsTalk.style.display = 'block';
    const computerChoice = getComputerChoice();
    playGame('scissors', computerChoice);
    setTimeout(() => result.style.display = 'flex', 850);
    JSBox(computerChoice);
    gameLock = true;
})

x.addEventListener('click', () => {
    gameLock = false;
    result.style.display = 'none';
    jsContainer.style.display = 'none';
    jsTalk.style.display = 'none';
})