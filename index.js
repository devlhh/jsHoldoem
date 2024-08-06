const open1 = document.getElementById("open1");
const open2 = document.getElementById("open2");

let openCount = 0;

let dealerIndex = 0;
let playerTurn = 0; // turn은 sb부터
let prevTurn = 0;
let sbIndex = 0;
let bbIndex = 0;
let drawIndex = 0;

let pocket = false;
let flop = false;
let turn = false;
let river = false;

function play() {
  betBtnDisAbled();
  setCard(); // 54장카드만들기
  setOpenCard(); // 오픈카드 초기화
  setPlayer(); // 플레이어 초기화
  setView();
  setMoney();
  resetDeckCard(); // 화면 deck 카드 초기화
}

function finish() {
  init();
  play();
}

function init() {
  cardDeck = [];
  openCard = [];
  player = [];

  viewCardCount = 24;
  openCount = 0;
  cardAmount = 0;
  pot = 0;
}

function nextTurn() {
  // 프리플랍일때 모든 턴 돌면
  if (pocket) {
    console.log("첫번째");
    if (playerTurn === bbIndex) {
      betBtnDisAbled();
      setTimeout(() => {
        removeBetTitle();
      }, 500);
    }
  } else {
    console.log("두번째");
    console.log(playerTurn);
    if (playerTurn === sbIndex) {
      setTimeout(() => {
        removeBetTitle();
      }, 500);
    }
  }

  if (playerTurn === player.length - 1) {
    playerTurn = 0;
  } else {
    playerTurn += 1;
  }

  if (playerTurn === 0) {
    prevTurn = player.length - 1;
  } else {
    prevTurn = playerTurn - 1;
  }
}

function removeBetTitle() {
  for (let i = 0; i < player.length; i++) {
    const div = document.getElementById(`p${i + 1}_betTitle`);
    div.innerHTML = "";

    if (i === player.length - 1) {
      setTimeout(() => {
        raseCheck();
      }, 500);
    }
  }
}

play();
