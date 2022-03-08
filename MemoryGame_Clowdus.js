document.addEventListener('DOMContentLoaded', () => {
  //All of the card-related options.
  const arrayOfCards = [
    {
      name: 'a',
      img: 'Images/Memory Game/a.png'
    },
    {
      name: 'b',
      img: 'Images/Memory Game/b.png'
    },
    {
      name: 'c',
      img: 'Images/Memory Game/c.png'
    },
    {
      name: '1',
      img: 'Images/Memory Game/1.png'
    },
    {
      name: '2',
      img: 'Images/Memory Game/2.png'
    },
    {
      name: '3',
      img: 'Images/Memory Game/3.png'
    },
    {
      name: 'a',
      img: 'Images/Memory Game/a.png'
    },
    {
      name: 'b',
      img: 'Images/Memory Game/b.png'
    },
    {
      name: 'c',
      img: 'Images/Memory Game/c.png'
    },
    {
      name: '1',
      img: 'Images/Memory Game/1.png'
    },
    {
      name: '2',
      img: 'Images/Memory Game/2.png'
    },
    {
      name: '3',
      img: 'Images/Memory Game/3.png'
    }
  ]

  arrayOfCards.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let chosenCards = []
  let chosenCardsId = []
  let cardsWon = []

  //create the board
  function createABoard() {
    for (let i = 0; i < arrayOfCards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'imageFilePath.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipACard)
      grid.appendChild(card)
    }
  }

  //check for any matches
  function checkForAMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = chosenCardsId[0]
    const optionTwoId = chosenCardsId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('The second card cannot be the first card.')
    }
    else if (chosenCards[0] === chosenCards[1]) {
      alert('They match!')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipACard)
      cards[optionTwoId].removeEventListener('click', flipACard)
      cardsWon.push(chosenCards)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Try again. You can do it.')
    }
    chosenCards = []
    chosenCardsId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'You found them all! You win! Congratulations!'
    }
  }

  //flip the card
  function flipACard() {
    let cardId = this.getAttribute('data-id')
    chosenCards.push(cardArray[cardId].name)
    chosenCardsId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (chosenCards.length ===2) {
      setTimeout(checkForAMatch, 500)
    }
  }

  createABoard()
})
