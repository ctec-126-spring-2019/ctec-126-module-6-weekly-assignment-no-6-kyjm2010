// script.js
// Weekly Assignment No. 6

/*
* All of the code must be adequetely commented.
* This includes the code that you write and the code that was provided.
*/

//class that builds "playing cards" using a constructor which passes in variables that are assigned to properties
class PlayingCard {
    constructor(element, face, suit) {
       this.element = element
       this.face = face
       this.suit = suit
       this.img = `img/${face}_of_${suit}.png`
       this.state = 0

//each card has an event listener which is triggered when the card is clicked. This will either display the card image or its back
        this.element.addEventListener('click', () => {
            if(this.state == 0){
                this.element.src = this.img
                this.state = 1
            } else if(this.state == 1){
                this.element.src = 'img/back.png'
                this.state = 0
            }
        })
    }

    //function that displays a cards face
    showFaces() {
        this.element.src = this.img
    }
    //function that displays a cards back
    showBacks() {
        this.element.src = 'img/back.png'
    }
}

function createCardImage() {
    const img = document.createElement('img')
        img.src = 'img/back.png'
        return img
    
}
//adds each card to the container div
function displayDeck() {
    deck.forEach(card => {
        container.appendChild(card.element)
    })
}

//shuffles the deck 1000 times
function shuffleDeck() {
    for (let i = 0; i < 1000; i++) {
        deck.sort(() => Math.random() - 0.5)
    }
}

//function that removes a card from the front of the current deck array
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

//nested loops that create a deck of playing cards 13 cards for each of the 4 suits 
function buildDeck() {
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    suits.forEach(suit => {
        faces.forEach(face => {
            let image = createCardImage()
            image.setAttribute('id', `${face}_of_${suit}.png`)
            deck.push(new PlayingCard(image, face, suit))
        })
    })
}

//a function that clears messages displayed when the user interracts with the interface. Called throughout with the setTimeout function
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
    //creates a half second delay to simulate the deck being reloaded even though it happens instantly
    setTimeout(displayDeck, 500)
    //removes the displayed message after 5 seconds
    setTimeout(clearActions, 5000)
})

removeBtn.addEventListener('click', () => {
    actions.innerHTML = 'A card was removed.'
    removeCard()
    setTimeout(clearActions, 5000)
})

//event listener that makes the deck array empty, clears the html of the container div then propogates it by calling the buildDeck function
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