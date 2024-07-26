let totalBatting = 0;
let enterBatting = 100000;
let playerCount = 2;

let firstOpen = true;
let secondOpen = false;
let lastOpen = false;

let turn = 1;

const playBtnTag = document.getElementById("btn");

function gmae() {
  setCard();
  setPlayer();
  setOpenCard();
  setMoney();
  play();
}

function play() {
  // 첫 배팅 시작
  betBtnDisAbled();
  onEnterBatting();
  drawCard();
}

// function secondCard(playerIndex) {
//   player[playerIndex].deck[1] = cardDeck.pop(); // 카드뽑고
//   player[playerIndex].symbol[1] = player[playerIndex].deck[1].symbol; // 카드문양
//   player[playerIndex].number[1] = player[playerIndex].deck[1].number; // 카드숫자
//   createCard(`p${playerIndex + 1}_2`, playerIndex, 1); // 카드 만들기

//   if (playerIndex === 2) {
//     betStart = true;
//   }
// }

// function finish() {
//   reset();
//   gmae();
// }

// function reset() {
//   cardAmount = 54;
//   oepnCard = [];
//   player = [];
//   cardDeck = [];
//   totalBatting = 0;
//   enterBatting = 0;
//   currentTurn = 1;
//   firstPlay = false;
//   secondPlay = false;
//   thirdPlay = false;

//   // 새로운 카드 덱으로 만들기 위해 기존 div 없애기.
//   const setCardTag = document.getElementById("setCardList");
//   const setP1 = document.getElementById("p1");

//   while (setCardTag.firstChild) {
//     setCardTag.removeChild(setCardTag.firstChild);
//   }

//   while (setP1.firstChild) {
//     setP1.removeChild(setP1.firstChild);
//   }
// }

function nextTurn() {
  if (turn === player.length) {
    turn = 1;
  } else {
    turn += 1;
  }
}

gmae();
