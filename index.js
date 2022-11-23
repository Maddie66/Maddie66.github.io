const cardArray = [
    {
        name: "01",
        img: 'images/01.png',

    },
    {
        name: "02",
        img: 'images/02.png',

    },
    {
        name: "03",
        img: 'images/03.png',

    },
    {
        name: "04",
        img: 'images/04.png',

    },
    {
        name: "05",
        img: 'images/05.png',

    },
    {
        name: "06",
        img: 'images/06.png',

    },
    {
        name: "01",
        img: 'images/01.png',

    },
    {
        name: "02",
        img: 'images/02.png',

    },
    {
        name: "03",
        img: 'images/03.png',

    },
    {
        name: "04",
        img: 'images/04.png',

    },
    {
        name: "05",
        img: 'images/05.png',

    },
    {
        name: "06",
        img: 'images/06.png',

    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
const score = document.querySelector('#score')
let choosen = []
let choosenID = []
const won = []

function buildBoard(){
    for(let i=0; i<12; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/ball.png')
        card.setAttribute('data-id', i)
        card.setAttribute('width', 138)
        card.setAttribute('height', 168)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

buildBoard()
result.textContent = 0
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const firstCard = cards[choosenID[0]]
    const secondCard = cards[choosenID[1]]
    console.log('check for match!')
    console.log(firstCard)
    console.log(secondCard)
    if(choosen[0] == choosen[1]){
        console.log('found a match!')
        firstCard.setAttribute('src', 'images/blank.png')
        secondCard.setAttribute('src', 'images/blank.png')
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        won.push(choosen)
    }else{
        firstCard.setAttribute('src', 'images/ball.png')
        secondCard.setAttribute('src', 'images/ball.png')
    }
    result.textContent = won.length;
    choosen = []
    choosenID = []

    if(won.length == cards.length/2){
        score.textContent = 'Congratulations You Got Them All!'
    }
}

function flipCard(){
    let cardID = this.getAttribute('data-id')
    choosen.push(cardArray[cardID].name)
    choosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    console.log(cardArray[cardID].img)
    if(choosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
