const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    // Play Game
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')

        const compuerOptions = ['rock', 'paper', 'scissors'];

        options.forEach( option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = compuerOptions[computerNumber];
                
                compareHands(this.textContent, computerChoice);
                updateScore()

                playerHand.src  = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
            });
        });

    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = "Player Wins";
                pScore++;
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                return;
            }
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = "Computer Wins";
                cScore++;
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper') {
                winner.textContent = "Player Wins";
                pScore++;
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                return;
            }
        }
    }

    startGame();
    playMatch();
};

game();