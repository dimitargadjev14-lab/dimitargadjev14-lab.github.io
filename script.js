console.log('JS connecteet')

const clickHandler = () => {
  P1 = 'rock';
          PC = items[Math.floor(Math.random() * items.length)];
          if (PC === 'rock') {
            chosePC = '✊';
          }
          if (PC === 'scissors') {
            chosePC = '✌️';
          }

          if (PC === 'paper') {
            chosePC = '✋';
          }
          if (P1 === 'rock' && PC === 'rock') {
            tie += 1;
            choseP1 = '✊';
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so :  Tie!`;
          }
          if (P1 === 'rock' && PC === 'paper') {
            lose += 1;
            choseP1 = '✊';
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so : Robot Wins`;
          }
          if (P1 === 'rock' && PC === 'scissors') {
            win += 1;
            choseP1 = '✊';
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so : Player Wins`;
          }
          stats.textContent =
            'Wins: ' + win + '  Losses: ' + lose + ' Ties: ' + tie;

}

const clickHandler1 = () => {
 P1 = 'paper';
          choseP1 = '✋';
          PC = items[Math.floor(Math.random() * items.length)];
          if (PC === 'rock') {
            chosePC = '✊';
          }
          if (PC === 'scissors') {
            chosePC = '✌️';
          }

          if (PC === 'paper') {
            chosePC = '✋';
          }
          if (PC === 'rock') {
            win += 1;
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so : Player Wins`;
          } else if (PC === 'paper') {
            tie += 1;
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so :  Tie!`;
          } else if (PC === 'scissors') {
            lose += 1;
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so : Robot Wins`;
          }

          stats.textContent =
            'Wins: ' + win + '  Losses: ' + lose + '  Ties: ' + tie;
}

const clickHandler2 = () => {
   P1 = 'scissors';
          PC = items[Math.floor(Math.random() * items.length)];
          if (PC === 'rock') {
            chosePC = '✊';
          }
          if (PC === 'scissors') {
            chosePC = '✌️';
          }

          if (PC === 'paper') {
            chosePC = '✋';
          }
          if (P1 === 'scissors' && PC === 'rock') {
            lose += 1;
            choseP1 = '✌️';
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so : Robot Wins`;
          }
          if (P1 === 'scissors' && PC === 'paper') {
            win += 1;
            choseP1 = '✌️';
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so : Player Wins`;
          }
          if (P1 === 'scissors' && PC === 'scissors') {
            tie += 1;
            choseP1 = '✌️';
            screen.textContent = `You chose ${choseP1} Robot chose ${chosePC} so :  Tie!`;
          }
          stats.textContent =
            'Wins: ' + win + '  Losses: ' + lose + '  Ties: ' + tie;
}

       const resetstats = () => {
         ((tie = 0), (lose = 0), (win = 0));
          stats.textContent = 'Wins: 0  Losses: 0  Ties: 0';
          screen.textContent = 'Stats Reset';
       }