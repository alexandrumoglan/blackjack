const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let playerCardValue=0;
let playerCardNames=[];
let dealerCardValue=0;
let dealerCardNames=[];

let cards=[
    {value:1, unicode:"🃑", name:"Ace of Clubs", id:0},
    {value:2, unicode:"🃒", name: "2 of Clubs", id:1},
    {value:3, unicode:"🃓", name: "3 of Clubs", id:2},
    {value:4, unicode:"🃔", name: "4 of Clubs", id:3},
    {value:5, unicode:"🃕", name: "5 of Clubs", id:4},
    {value:6, unicode:"🃖", name: "6 of Clubs", id:5},
    {value:7, unicode:"🃗", name: "7 of Clubs", id:6},
    {value:8, unicode:"🃘", name: "8 of Clubs", id:7},
    {value:9, unicode:"🃙", name: "9 of Clubs", id:8},
    {value:10, unicode:"🃚", name: "10 of Clubs", id:9},
    {value:10, unicode:"🃛", name: "Jack of Clubs", id:10},
    {value:10, unicode:"🃝", name: "Queen of Clubs", id:11},
    {value:10, unicode:"🃞", name: "King of Clubs", id:12},
    {value:1, unicode:"🃁", name:"Ace of Diamonds", id:13},
    {value:2, unicode:"🃂", name: "2 of Diamonds", id:14},
    {value:3, unicode:"🃃", name: "3 of Diamonds", id:15},
    {value:4, unicode:"🃄", name: "4 of Diamonds", id:16},
    {value:5, unicode:"🃅", name: "5 of Diamonds", id:17},
    {value:6, unicode:"🃆", name: "6 of Diamonds", id:18},
    {value:7, unicode:"🃇", name: "7 of Diamonds", id:19},
    {value:8, unicode:"🃈", name: "8 of Diamonds", id:20},
    {value:9, unicode:"🃉", name: "9 of Diamonds", id:21},
    {value:10, unicode:"🃊", name: "10 of Diamonds", id:22},
    {value:10, unicode:"🃋", name: "Jack of Diamonds", id:23},
    {value:10, unicode:"🃍", name: "Queen of Diamonds", id:24},
    {value:10, unicode:"🃎", name: "King of Diamonds", id:25},
    {value:1, unicode:"🂱", name:"Ace of Hearts", id:26},
    {value:2, unicode:"🂲", name: "2 of Hearts", id:27},
    {value:3, unicode:"🂳", name: "3 of Hearts", id:28},
    {value:4, unicode:"🂴", name: "4 of Hearts", id:29},
    {value:5, unicode:"🂵", name: "5 of Hearts", id:30},
    {value:6, unicode:"🂶", name: "6 of Hearts", id:31},
    {value:7, unicode:"🂷", name: "7 of Hearts", id:32},
    {value:8, unicode:"🂸", name: "8 of Hearts", id:33},
    {value:9, unicode:"🂹", name: "9 of Hearts", id:34},
    {value:10, unicode:"🂺", name: "10 of Hearts", id:35},
    {value:10, unicode:"🂻", name: "Jack of Hearts", id:36},
    {value:10, unicode:"🂽", name: "Queen of Hearts", id:37},
    {value:10, unicode:"🂾", name: "King of Hearts", id:38},
    {value:1, unicode:"🂡", name:"Ace of Spades", id:39},
    {value:2, unicode:"🂢", name: "2 of Spades", id:40},
    {value:3, unicode:"🂣", name: "3 of Spades", id:41},
    {value:4, unicode:"🂤", name: "4 of Spades", id:42},
    {value:5, unicode:"🂥", name: "5 of Spades", id:43},
    {value:6, unicode:"🂦", name: "6 of Spades", id:44},
    {value:7, unicode:"🂧", name: "7 of Spades", id:45},
    {value:8, unicode:"🂨", name: "8 of Spades", id:46},
    {value:9, unicode:"🂩", name: "9 of Spades", id:47},
    {value:10, unicode:"🂪", name: "10 of Spades", id:48},
    {value:10, unicode:"🂫", name: "Jack of Spades", id:49},
    {value:10, unicode:"🂭", name: "Queen of Spades", id:50},
    {value:10, unicode:"🂮", name: "King of Spades", id:51}
]

let playerHand = []

let dealerHand = []


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//console.log(cards[getRandomArbitrary(0,51)]);

function cardsValue(card){
  console.log(card)
  value=value + card.value
  console.log("value: " + value)
}

function playerGetCards(){
  let newCard = getRandomArbitrary(0,51)
  playerHand.push(cards[newCard])
  playerCardValue = playerCardValue+cards[newCard].value
  playerCardNames.push(cards[newCard].name)
  console.log("You have " + (playerCardValue) + " from the cards: "+ playerCardNames)
}

function dealerGetCards(){
  let newCard = getRandomArbitrary(0,51)
  dealerHand.push(cards[newCard])
  dealerCardValue = dealerCardValue + cards[newCard].value
  dealerCardNames.push(cards[newCard].name)
  console.log("Dealer has " + dealerCardValue + " from the cards: "+ dealerCardNames)
  if(dealerCardValue==21){
    console.log("Dealer blackjack!")
  }
  if(dealerCardValue>21){
    console.log("Dealer bust!")
  }
}

function promptPlayer(){
  rl.question('Hit ⏎ or Stand ␣ ?', (input) => {
    if (input === '' && playerCardValue<22) {
      console.log("Hit")
      playerGetCards()
      if (playerCardValue<21){
        promptPlayer()
      }
      if (playerCardValue == 21){
        console.log("Blackjack!")
        dealerGetCards()
      }
      if (playerCardValue >21){
        console.log("Bust!")
      }
    } else if (input === ' ') {
      console.log("Stand")
      console.log("Dealer's turn")
      dealerGetCards()
      while (dealerCardValue<=17){
        dealerGetCards()
      }
    } else {
      console.log('Invalid input. Please enter either ⏎ for hit or ␣ for stand.');
      promptPlayer();
    }
  });
}


function game(){
  playerGetCards()
  dealerGetCards()
  playerGetCards()
  dealerGetCards()
  if (playerCardValue<21){
    promptPlayer()
  }
}

game()

//de facut cazul in care jucatorul si dealerul au 21
//de facut verificarea asului in functie de celalalte carti
//de imbunatatit vizual