const rpsChoice = document.querySelectorAll('.choice');
const choiceContainer = document.querySelector('.choice-container');
const resultContainer = document.querySelector('.result-container');
const ourResult = document.querySelector('#our-icon-wrap');
const houseResult = document.querySelector('#house-icon-wrap');
const houseResultBg = document.querySelector('.house-result-bg');
const statusContainer = document.querySelector('.status-container');
const playAgainBtn = document.querySelector('.play-again-btn');
const score = document.querySelector('.score-container__score');
const rulesBtn = document.querySelector('.rules-btn');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close');

let ourScore = 0;

rpsChoice.forEach(choice => {
  choice.addEventListener('click', event => {
    let ourChoice = event.target;
    // console.log(ourChoice);
    if (ourChoice.classList.contains('choice')) {
      
      let ourChoiceId = ourChoice.id;
      let ourChoiceImgPath = `images/icon-${ourChoiceId}.svg`;
      
      choiceContainer.style.display = 'none';
      resultContainer.style.display = 'flex';
      ourResult.className = `result ${ourChoiceId}`;
      ourResult.style.display ="flex";
      ourResult.firstElementChild.setAttribute("src", ourChoiceImgPath);


      const choices = ['paper', 'scissors', 'rock'];
      let houseChoice = choices[getRandomInt(choices.length)];
      // console.log(houseChoice);
      let houseChoiceImgPath = `images/icon-${houseChoice}.svg`;
      
      setTimeout(function(){
        houseResultBg.style.display = 'none';
        houseResult.className = `result ${houseChoice}`;
        houseResult.style.display ="flex";
        houseResult.firstElementChild.setAttribute("src", houseChoiceImgPath);

        if (ourChoiceId === houseChoice) {
          statusContainer.style.display ="flex";
          statusContainer.firstElementChild.textContent = "It's a Tie";
          houseResult.style.setProperty('--display-none', 'none');
          ourResult.style.setProperty('--display-none', 'none');
        } else if (
          ourChoiceId === 'paper' && houseChoice === 'rock' ||
          ourChoiceId === 'scissors' && houseChoice === 'paper' ||
          ourChoiceId === 'rock' && houseChoice === 'scissors') 
          {
            statusContainer.style.display ="flex";
            statusContainer.firstElementChild.textContent = 'You Win';
            score.innerHTML = ourScore += 1;
            houseResult.style.setProperty('--display-none', 'none');
            ourResult.style.setProperty('--display-none', 'block');
        } else {
          statusContainer.style.display ="flex";
          statusContainer.firstElementChild.textContent = 'You Lose';
          houseResult.style.setProperty('--display-none', 'block');
          ourResult.style.setProperty('--display-none', 'none');
        }

      }, 600);
    }

  });
});

playAgainBtn.addEventListener('click', playAgain);

rulesBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playAgain(e) {
  choiceContainer.style.display = 'flex';
  resultContainer.style.display = 'none';
  houseResult.style.display ="none";
  houseResultBg.style.display = 'flex';
  statusContainer.style.display ="none";
  houseResult.style.setProperty('--display-none', 'none');
  ourResult.style.setProperty('--display-none', 'none');
}