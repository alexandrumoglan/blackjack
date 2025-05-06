const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let playerCardValue=0;
let playerCardNames=[];
let playerHand = []
let dealerCardValue=0;
let dealerCardNames=[];
let dealerHand = []

//cod repetitiv dar nu am gasit alta metoda care sa ma lase sa pun si unicod sau imagine

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

//numar la intamplare pentru id-ul cartii

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


//jucatorul isi primeste cartile
function playerGetCards(){
  let newCard = getRandomArbitrary(0,51)
  if (playerHand.includes(cards[newCard]) || dealerHand.includes(cards[newCard])){
    newCard = getRandomArbitrary(0,51)
  }
  playerHand.push(cards[newCard])
  playerCardValue = playerCardValue+cards[newCard].value
  playerCardNames.push(cards[newCard].name)


  //verific daca jucatorul are un as (aici am pornit de la ideea gresita ca asul este 11 doar cand are langa el o carte de 10)
/////////////////////////////////////////
//de incercat
//optiune 1 boolean daca exista un ace

  if (playerHand.length==2 && playerCardNames[0].split(" ")[0].includes("Jack", "Queen", "King", "10") && playerCardNames[1].includes("Ace")){
    playerCardValue=playerCardValue+10;
  }
  if (playerHand.length==2 && playerCardNames[1].split(" ")[0].includes("Jack", "Queen", "King", "10") && playerCardNames[0].includes("Ace")){
    playerCardValue=playerCardValue+10;
  }
  console.log("You have " + (playerCardValue) + " from the cards: "+ playerCardNames)
}


//dealerul isi primeste cartile
function dealerGetCards(){
  let newCard = getRandomArbitrary(0,51)
  if (dealerHand.includes(cards[newCard]) || playerHand.includes(cards[newCard]) ){
    newCard = getRandomArbitrary(0,51)
  }
  dealerHand.push(cards[newCard])
  dealerCardValue = dealerCardValue + cards[newCard].value
  dealerCardNames.push(cards[newCard].name)
  //aceeasi poveste ca la jucator
  if (dealerHand.length==2 && dealerCardNames[0].split(" ")[0].includes("Jack", "Queen", "King") && dealerCardNames[1].includes("Ace")){
    dealerCardValue=dealerCardValue+10;
  }
  if (dealerHand.length==2 && dealerCardNames[1].split(" ")[0].includes("Jack", "Queen", "King") && dealerCardNames[0].includes("Ace")){
    dealerCardValue=dealerCardValue+10;
  }

/////////////////////////////////////

  console.log("Dealer has " + dealerCardValue + " from the cards: "+ dealerCardNames)
  if(dealerCardValue==21){
    console.log("Dealer blackjack!")
  }
  if(dealerCardValue>21){
    console.log("Dealer bust!")
  }
}


//aici jucatorul este intrebat daca doreste carti + logica principala a jocului
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
        if (dealerCardValue<18){
          dealerGetCards()
        }
      }
      //nu mi-a mers sa folosesc un listener doar pentru taste asa ca trebuie folosit spatiu si enter
    } else if (input === ' ') {
      console.log("Stand")
      console.log("Dealer's turn")
      while (dealerCardValue<=17){
        dealerGetCards()
        if (dealerCardValue==playerCardValue || dealerCardValue==playerCardValue==21){
          console.log("Push!")
        }
      }
      if (dealerCardValue<21 && playerCardValue<21 && playerCardValue>dealerCardValue){
        console.log("The player wins!")
      }
      if (dealerCardValue<21 && playerCardValue<21 && playerCardValue<dealerCardValue){
        console.log("The dealer wins!")
      }
    } else {
      console.log('Invalid input. Please enter either ⏎ for hit or ␣ for stand.');
      promptPlayer();
    }
  });
}
//logica jocului si mai mult cod repetitiv
function game(){
  playerGetCards()
  dealerGetCards()
  playerGetCards()
  dealerGetCards()
  //am avut problema ca jucatorul sau dealerul sa aiba blackjack din primele 2 carti si tot sa fie intrebat daca mai doreste carti asa ca am pus si aici verificarea
  if (playerCardValue<21){
    promptPlayer()
  } else console.log("Blackjack!")
  if (dealerCardValue==21){
    console.log("Dealer blackjack!")
  }
}

game()

//asul sa fie 11 in anumite conditii DE REFACUT
//de imbunatatit vizual