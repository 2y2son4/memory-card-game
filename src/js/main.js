/* eslint-disable no-console */
'use strict';

const grid = document.querySelector('.main__grid');
const resultDisplay = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');

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

    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      alert('Has seleccionado la misma Ale dos veces, closer 🤦');
      cards[optionOneId].setAttribute('src', './assets/images/back.png');
      cards[optionTwoId].setAttribute('src', './assets/images/back.png');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Eres listísima 🥳');
      cards[optionOneId].setAttribute('src', cardArray[optionOneId].imgBW);
      cards[optionTwoId].setAttribute('src', cardArray[optionTwoId].imgBW);
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      alert('Prueba otra vez, perdedora 🖕');
      cards[optionOneId].setAttribute('src', './assets/images/back.png');
      cards[optionTwoId].setAttribute('src', './assets/images/back.png');
    }

    function ales() {
      if (cardsWon.length === 1) {
        return 'Ale';
      } else {
        return 'Ales';
      }
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = 'Puntuación:' + ' ' + cardsWon.length + ' ' + ales();

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Lo sabía, tata. Has ganado.';
    }
  }

  // flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

// reset button
function resetGame() {
  location.reload();
}
resetBtn.addEventListener('click', resetGame);

// let srcOptionOne;
// for (let i = 0; i < cards.length; i++) {
//   if (cardArray[cardId] === cards[i]) {
//     srcOptionOne = cards[i].getAttribute('src');
//     return console.log(srcOptionOne);
//     // cards[optionOneId].setAttribute('src', srcOptionOne);
//   }
// }

console.log('Feliz punteaños, tata 😘');
