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

// 카드 페어 만드는 함수
async function cardPair() {
  // 오픈된카드랑 비교하기위해 합침
  await player.forEach((players) => {
    for (let j = 0; j < 5; j++) {
      players.deck.push(openCard[j].deck[j]);
    }

    // 숫자 정렬
    players.deck.sort((a, b) => a.number - b.number);
  });

  // 카드 중복 찾기
  await player.forEach((players) => {
    const result = countPairs(players.deck);
    players.pair = result;
  });

  // 페어 view로 보여주기
  for (let i = 0; i < player.length; i++) {
    const pairDiv = document.getElementById(`p${i + 1}_pair`);
    pairDiv.innerHTML = player[i].pair;
  }
}

// 페어 찾는 함수
function countPairs(playerDeck) {
  let one = false;
  let two = false;
  let three = false;
  let four = false;
  let straight = false;
  let flush = false;

  let value = "";
  let result = "";

  let strightCount = 0;
  for (let i = 0; i < playerDeck.length - 1; i++) {
    sum = playerDeck[i].number - playerDeck[i + 1].number;

    if (sum === -1) {
      strightCount += 1;
    } else {
      strightCount = 0;
    }

    if (strightCount === 5) {
      straight = true;
    }
  }

  if (!straight && !flush) {
    // 카드 숫자들 포함되면 카운트 + 1씩
    const numberCounts = {};
    const numberValues = {};

    playerDeck.forEach((card) => {
      numberCounts[card.number] = (numberCounts[card.number] || 0) + 1;
      numberValues[card.number] = card.number;
    });

    console.log(numberCounts, numberValues);

    // 객체값들 배열로 반환
    const pairs = Object.values(numberCounts);
    const values = Object.keys(numberValues);

    // 페어 찾기
    pairs.forEach((x, i) => {
      if (x === 4) {
        four = true;

        if (values[i] === "1") {
          value = `A`;
        }
        if (value === `A`) return;

        if (values[i] === "13") {
          value = `K`;
        }
        if (value === `K`) return;

        if (values[i] === "12") {
          value = `Q`;
        }
        if (value === `Q`) return;

        if (values[i] === "11") {
          value = `J`;
        }
        if (value === `J`) return;

        value = `${values[i]}`;
      } else if (x === 3) {
        console.log(x, values[i]);
        three = true;

        if (values[i] === "1") {
          value = `A`;
        }
        if (value === `A`) return;

        if (values[i] === "13") {
          value = `K`;
        }
        if (value === `K`) return;

        if (values[i] === "12") {
          value = `Q`;
        }
        if (value === `Q`) return;

        if (values[i] === "11") {
          value = `J`;
        }
        if (value === `J`) return;

        value = `${values[i]}`;
      } else if (one && x === 2) {
        two = true;

        if (values[i] === "1") {
          value = `A`;
        }
        if (value === `A`) return;

        if (values[i] === "13") {
          value = `K`;
        }
        if (value === `K`) return;

        if (values[i] === "12") {
          value = `Q`;
        }
        if (value === `Q`) return;

        if (values[i] === "11") {
          value = `J`;
        }
        if (value === `J`) return;

        value = `${values[i]}`;
      } else if (x === 2) {
        one = true;

        if (values[i] === "1") {
          value = `A`;
        }
        if (value === `A`) return;

        if (values[i] === "13") {
          value = `K`;
        }
        if (value === `K`) return;

        if (values[i] === "12") {
          value = `Q`;
        }
        if (value === `Q`) return;

        if (values[i] === "11") {
          value = `J`;
        }
        if (value === `J`) return;

        value = `${values[i]}`;
      } else {
        if (values[i] === "1") {
          value = `A`;
        }
        if (value === `A`) return;

        if (values[i] === "13") {
          value = `K`;
        }
        if (value === `K`) return;

        if (values[i] === "12") {
          value = `Q`;
        }
        if (value === `Q`) return;

        if (values[i] === "11") {
          value = `J`;
        }
        if (value === `J`) return;

        value = `${values[i]}`;
      }
    });
  }

  if (straight) {
    result = `${value} straight`;
  } else if (four) {
    result = `${value} four card`;
  } else if (two && three) {
    result = `${value} full house`;
  } else if (three) {
    result = `${value} trips`;
  } else if (two) {
    result = `${value} two pair`;
  } else if (one) {
    result = `${value} one pair`;
  } else {
    result = `${value} high`;
  }
  return result;
}

function winner() {
  for (let i = 0; i < player.length; i++) {}
}

play();
