let openCount = 0;

let playerTurn = 0; // turn은 sb부터
let prevTurn = 0;

let dealerIndex = 0;
let sbIndex = 0;
let bbIndex = 0;
let drawIndex = 0;

let betStartTurn = 0;
let betEndTurn = 0;

let gameType = ["pocket", "flop", "turn", "river"];
let gameCount = 0;

function play() {
  betBtnDisAbled();
  setPlayer(); // 플레이어 초기화
  setCard(); // 54장카드만들기
  setOpenCard(); // 오픈카드 초기화
  setMoney();
  setView();
  resetDeckCard(); // 화면 deck 카드 초기화 후 카드 분배

  // resetDeckCard -> playerDrawCard -> first, secondDraw, ->
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

function pocketTurn() {
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

function nextTurn() {
  if (currentGame === gameType[gameCount]) {
    if (playerTurn === betEndTurn) {
      setTimeout(() => {
        removeBetTitle();
      }, 1000);
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

  gameCheck();
}

function removeBetTitle() {
  for (let i = 0; i < player.length; i++) {
    const div = document.getElementById(`p${i + 1}_betTitle`);
    div.innerHTML = "";
  }
}

function gameCheck() {
  const result = remainCallMoney();

  if (result) {
    noCheckBetBtnAbled();
  } else {
    if (playerTurn === betStartTurn) {
      betBtnDisAbled();
      if (openCount < 3) {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            drawCard();

            if (i === 2) {
              betBtnAbled();
            }
          }, i * 500);
        }
      } else {
        drawCard();
        betBtnAbled();
      }
    } else {
      betBtnAbled();
    }
  }
}

function cardPair() {
  for (let i = 0; i < player.length; i++) {
    let count = 0;
    let players = player[i];

    for (let j = 0; j < 5; j++) {
      players.deck.push(openCard[j].deck[j]);
    }

    console.log(players);
  }

  for (let i = 0; i < player.length; i++) {
    let count = 0;

    for (let j = 0; j < player[i].deck.length - 1; j++) {
      if (player[i].deck[0].number === player[i].deck[j + 1].number) {
        count += 1;
      }
    }
    player[i].counts.push(count);
  }

  console.log(player);
}

function winner() {
  for (let i = 0; i < player.length; i++) {}
}

play();
