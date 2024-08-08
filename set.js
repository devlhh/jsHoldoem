const deckCardBoxDiv = document.getElementById("deckCardBox"); // deckCardk 놓는 박스

const potDiv = document.getElementById("potMoney"); // 전체 pot 보여주는 box

let cardDeck = []; // 54장카드
let openCard = []; // 오픈된 카드
let player = []; // 플레이어
let marks = ["♠", "◆", "♥", "♣"]; // 카드 심볼
let cardAmount = 0; // 현재 카드 수
let viewCardCount = 24; // 화면상 보여줄 deck 수

const playerCount = 3; // 유저 수

let pot = 0;

// 54장 카드덱 문양, 번호넣기
function setCard() {
  for (let i = 0; i < 4; i++) {
    const mark = marks[i];

    for (let j = 0; j < 13; j++) {
      if (j === 0) {
        cardDeck[cardAmount] = {
          symbol: mark,
          number: 1,
          view: `${mark} A`,
        };
      } else {
        cardDeck[cardAmount] = {
          symbol: mark,
          number: j + 1,
          view: `${mark} ${j + 1}`,
        };
      }

      if (j === 10) {
        cardDeck[cardAmount] = {
          symbol: mark,
          number: 11,
          view: `${mark} J`,
        };
      }

      if (j === 11) {
        cardDeck[cardAmount] = {
          symbol: mark,
          number: 12,
          view: `${mark} Q`,
        };
      }

      if (j === 12) {
        cardDeck[cardAmount] = {
          symbol: mark,
          number: 13,
          view: `${mark} K`,
        };
      }

      // 현재 카드 양
      cardAmount += 1;
    }
  }
  // 카드 랜덤 배열
  cardDeck.sort(() => Math.random() - 0.5);
}

// 화면상에 보여주는카드
function resetDeckCard() {
  // 기존 deck 제거
  while (deckCardBoxDiv.firstChild) {
    deckCardBoxDiv.removeChild(deckCardBoxDiv.firstChild);
  }

  // 버튼 비활성화
  resetButton.disabled = true;
  drawButton.disabled = true;
  playerDrawButton.disabled = true;

  // deck 나눠주는 delay
  let delay = 0.0;

  // deck 나누기
  for (let i = 0; i < viewCardCount; i++) {
    const deck = document.createElement("div");
    deck.className = "deckCard";
    deck.setAttribute("id", `deck${i + 1}`);
    deck.style.zIndex = `${i + 1}`;

    deckCardBoxDiv.append(deck);
    deck.offsetHeight;

    // 카드 위치
    deck.style.bottom = `calc(${49}px + ${i}px)`;
    deck.style.right = `calc(${10}px + ${i}px)`;
    deck.style.opacity = "1";
    deck.style.transition =
      "bottom 0.5s ease-out, right 0.5s ease-out, opacity 0.5s ease";
    deck.style.transitionDelay = `${delay}s`;
    deck.style.boxShadow = "1px 1px lightgray";

    delay += 0.05;
  }

  // 일정 시간 후 버튼 활성화 (애니메이션 종료 후)
  setTimeout(() => {
    setDealerTurn(); // 딜러 턴
    setBlindTurn();
    setGameType();
    playerDrawCard(); // 플레이어 카드 분배
  }, delay * 1000 + 500); // delay * 1000 ms (전체 애니메이션 시간) + 500 ms (마진)
}

function setDealerTurn() {
  dealerIndex = 0;
  dealerView();
}

function setBlindTurn() {
  if (dealerIndex === player.length - 1) {
    sbIndex = 0;
    bbIndex = 1;
  } else {
    sbIndex = dealerIndex + 1;
    bbIndex = dealerIndex + 2;
    drawIndex = sbIndex;
  }

  sbView();
  bbView();

  setBetTurn();
}

function setBetTurn() {
  if (bbIndex === player.length - 1) {
    betStartTurn = 0;
    betEndTurn = bbIndex;
  } else {
    betStartTurn = bbIndex + 1;
    betEndTurn = bbIndex;
  }
}

function setGameType() {
  currentGame = gameType[0];
}

function setOpenCard() {
  for (let i = 0; i < 5; i++) {
    openCard[i] = {
      deck: [],
      symbol: [],
      number: "",
    };
  }
}

function setPlayer() {
  for (let i = 0; i < playerCount; i++) {
    player[i] = {
      id: `player${i}`,
      money: 5000000,
      deck: [],
      enterBetting: 0,
      currentBet: 0,
      isCall: false,
      isRase: false,
      isCheck: false,
      isFold: false,
      pair: "",
    };
  }
}

function setView() {
  const potBox = document.getElementById("potMoney");
  potBox.innerHTML = "0";

  for (let i = 0; i < player.length; i++) {
    const betBox = document.getElementById(`p${i + 1}_box`);
    betBox.removeChild(betBox.lastElementChild);
  }
}

function setMoney() {
  for (let i = 0; i < player.length; i++) {
    const moneyBox = document.getElementById(`p${i + 1}_money`);
    moneyBox.innerHTML = player[i].money;
  }

  for (let i = 0; i < player.length; i++) {
    const betBox = document.getElementById(`p${i + 1}_betBox`);
    betBox.innerHTML = player[i].currentBet;
  }
}
