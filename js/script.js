// script.js
// Weekly Assignment No. 6

/*
* All of the code must be adequetely commented.
* This includes the code that you write and the code that was provided.
*/

class PlayingCard {
    constructor(element, face, suit) {
        /*
        Create properties for:
        - element
        - suit
        - face
        - img (set this to `img/${face}_of_${suit}.png`)
        - state (set this to 0)
        */

        // your code goes here (remove this comment once you have added your code)

        this.element.addEventListener('click', () => {
            /*
            - The event listener should be for a click event
            - The event listener should have logic to switch out the this.element.src
            - It should also change the state if the card is flipped (this.state 0 or 1)
            - To show the back of the card use 'img/back.png'
            */

            // your code goes here (remove this comment once you have added your code)
        })
    }

    showFaces() {
        this.element.src = this.img
    }

    showBacks() {
        this.element.src = 'img/back.png'
    }
}

function createCardImage() {
    /*
    - Create a constant named img and have it create a new img element
    - Set the src property of the img to 'img/back.png'
    - return the img
    */

    // your code goes here (remove this comment once you have added your code)
}

function displayDeck() {
    /*
    - Create a loop that iterates through each card in the deck array
    - in the loop, append the card.element to the container
    - Use a forEach with an arrow function
    */

    // your code goes here (remove this comment once you have added your code)
}

function shuffleDeck() {
    for (let i = 0; i < 1000; i++) {
        deck.sort(() => Math.random() - 0.5)
    }
}

function removeCard() {
    if (deck.length != 0) {
        card = document.querySelector('img')
        card.remove()
        deck.shift()
        if (deck.length == 0) {
            actions.innerHTML = 'No cards left in the deck. :-('
        }
    }
}

function buildDeck() {
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    suits.forEach(suit => {
        faces.forEach(face => {
            /*
            - Call the createdCardImage() function and assign the return img element to a variable named image
            - Set the id attribute of the image to `${face}_of_${suit}.png`
            - Use the .push method to push a new PlayingCard object into the deck array
            - Do the .push and object creation in a single statement
            */

            // your code goes here (remove this comment once you have added your code)
        })
    })
}

function clearActions() {
    actions.innerHTML = ''
}

let deck = []

const container = document.querySelector('#container')
const actions = document.querySelector('#actions')
const shuffleBtn = document.querySelector('#shuffle')
const removeBtn = document.querySelector('#remove')
const newDeckBtn = document.querySelector('#newdeck')
const showFacesBtn = document.querySelector('#showfaces')
const showBacksBtn = document.querySelector('#showbacks')

shuffleBtn.addEventListener('click', () => {
    actions.innerHTML = 'The deck of cards has been shuffled.'
    container.innerHTML = ''
    shuffleDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

removeBtn.addEventListener('click', () => {
    actions.innerHTML = 'A card was removed.'
    removeCard()
    setTimeout(clearActions, 5000)
})

newDeckBtn.addEventListener('click', () => {
    actions.innerHTML = 'A new deck of cards has been created.'
    deck = []
    container.innerHTML = ''
    buildDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

showFacesBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card faces are now showing.'
    deck.forEach(card => {
        card.showFaces()
    })
})

showBacksBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card backs are now showing.'
    deck.forEach(card => {
        card.showBacks()
    })
})

buildDeck()
shuffleDeck()
displayDeck()