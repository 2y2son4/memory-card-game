/* eslint-disable no-console */
'use strict';

const grid = document.querySelector('.main__grid');
const resultDisplay = document.querySelector('.result');
const clueDisplay = document.querySelector('.clue');
const resetBtn = document.querySelector('.reset');

const cardImgBack = './assets/images/back.png';

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'ale-01',
      img: './assets/images/01.jpg',
      imgBW: './assets/images/bw/01.jpg',
    },
    {
      name: 'ale-02',
      img: './assets/images/02.jpg',
      imgBW: './assets/images/bw/02.jpg',
    },
    {
      name: 'ale-03',
      img: './assets/images/03.jpg',
      imgBW: './assets/images/bw/03.jpg',
    },
    {
      name: 'ale-04',
      img: './assets/images/04.jpg',
      imgBW: './assets/images/bw/04.jpg',
    },
    {
      name: 'ale-05',
      img: './assets/images/05.jpg',
      imgBW: './assets/images/bw/05.jpg',
    },
    {
      name: 'ale-06',
      img: './assets/images/06.jpg',
      imgBW: './assets/images/bw/06.jpg',
    },
    {
      name: 'ale-07',
      img: './assets/images/07.jpg',
      imgBW: './assets/images/bw/07.jpg',
    },
    {
      name: 'ale-08',
      img: './assets/images/08.jpg',
      imgBW: './assets/images/bw/08.jpg',
    },
    {
      name: 'ale-09',
      img: './assets/images/09.jpg',
      imgBW: './assets/images/bw/09.jpg',
    },
    {
      name: 'ale-10',
      img: './assets/images/10.jpg',
      imgBW: './assets/images/bw/10.jpg',
    },
    {
      name: 'ale-11',
      img: './assets/images/11.jpg',
      imgBW: './assets/images/bw/11.jpg',
    },
    {
      name: 'ale-12',
      img: './assets/images/12.jpg',
      imgBW: './assets/images/bw/12.jpg',
    },
    {
      name: 'ale-01',
      img: './assets/images/01.jpg',
      imgBW: './assets/images/bw/01.jpg',
    },
    {
      name: 'ale-02',
      img: './assets/images/02.jpg',
      imgBW: './assets/images/bw/02.jpg',
    },
    {
      name: 'ale-03',
      img: './assets/images/03.jpg',
      imgBW: './assets/images/bw/03.jpg',
    },
    {
      name: 'ale-04',
      img: './assets/images/04.jpg',
      imgBW: './assets/images/bw/04.jpg',
    },
    {
      name: 'ale-05',
      img: './assets/images/05.jpg',
      imgBW: './assets/images/bw/05.jpg',
    },
    {
      name: 'ale-06',
      img: './assets/images/06.jpg',
      imgBW: './assets/images/bw/06.jpg',
    },
    {
      name: 'ale-07',
      img: './assets/images/07.jpg',
      imgBW: './assets/images/bw/07.jpg',
    },
    {
      name: 'ale-08',
      img: './assets/images/08.jpg',
      imgBW: './assets/images/bw/08.jpg',
    },
    {
      name: 'ale-09',
      img: './assets/images/09.jpg',
      imgBW: './assets/images/bw/09.jpg',
    },
    {
      name: 'ale-10',
      img: './assets/images/10.jpg',
      imgBW: './assets/images/bw/10.jpg',
    },
    {
      name: 'ale-11',
      img: './assets/images/11.jpg',
      imgBW: './assets/images/bw/11.jpg',
    },
    {
      name: 'ale-12',
      img: './assets/images/12.jpg',
      imgBW: './assets/images/bw/12.jpg',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  // create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', './assets/images/back.png');
      card.setAttribute('data-id', i);
      card.setAttribute('class', 'main__grid-img ales');
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('.ales');

    const firstCard = cardsChosenId[0];
    const secondCard = cardsChosenId[1];

    if (firstCard === secondCard) {
      clueDisplay.textContent = 'Has seleKcionado la misma Ale dos veces, closer 🤦';
      cards[firstCard].setAttribute('src', cardImgBack);
      cards[secondCard].setAttribute('src', cardImgBack);
    } else if (cardsChosen[0] === cardsChosen[1]) {
      clueDisplay.textContent = 'Eres listísima 🥳';
      cards[firstCard].setAttribute('src', cardArray[firstCard].imgBW);
      cards[secondCard].setAttribute('src', cardArray[secondCard].imgBW);
      cards[firstCard].removeEventListener('click', flipCard);
      cards[secondCard].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      clueDisplay.textContent = 'Prueba otra vez, perdedora 🖕';
      cards[firstCard].setAttribute('src', cardImgBack);
      cards[secondCard].setAttribute('src', cardImgBack);
    }

    function ales(length) {
      if (cardsWon.length === 0) {
        return 'CERO Ales 😭';
      } else if (cardsWon.length === 1) {
        return length + ' ' + 'Ale 🤓';
      } else {
        return length + ' ' + 'Ales 🤓';
      }
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = ales(cardsWon.length);

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Lo sabía, tata. Has ganado.';
      clueDisplay.textContent = 'Dale al botoncincli de abajo o... ¡Hasta nunqui!';
    }
  }

  // flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 800);
    }
    this.classList.toggle('flip');
  }

  createBoard();
});

// reset button
function resetGame() {
  location.reload();
}
resetBtn.addEventListener('click', resetGame);

console.log('Feliz punteaños, tata 😘');
