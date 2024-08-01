const deckCardBoxDiv = document.getElementById("deckCardBox");
let viewCardCount = 24;
let cards = [];
const resetButton = document.querySelector(".resetBtn");
const drawButton = document.querySelector(".drawBtn");
const playerDrawButton = document.querySelector(".playerDrawBtn");

const open1 = document.getElementById("open1");
const open2 = document.getElementById("open2");

let openCount = 0;

function play() {
  setCards();
  resetDeckCard();
}

function finish() {
  init();
  play();
}

function init() {
  cards = [];
  openCount = 0;
  viewCardCount = 24;
}

function setCards() {
  for (let i = 0; i < 54; i++) {
    cards.push(i + 1);
  }
}

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

    delay += 0.05;
  }

  // 일정 시간 후 버튼 활성화 (애니메이션 종료 후)
  setTimeout(() => {
    resetButton.disabled = false;
    drawButton.disabled = false;
    playerDrawButton.disabled = false;
  }, delay * 1000 + 500); // delay * 1000 ms (전체 애니메이션 시간) + 500 ms (마진)
}

function drawCard() {
  // 다 오픈하면 draw 종료
  if (openCount === 5) return;

  // open CardBox 카드 위치
  const offset = document.getElementById(`open${openCount + 1}`);

  let deck = document.getElementById(`deck${viewCardCount}`);
  deck.offsetHeight;

  // 덱 뽑고 o
  deck.textContent = cards.pop();
  deck.style.bottom = "49px";
  deck.style.right = `calc(${1448}px - ${offset.offsetLeft}px)`;
  deck.style.transition = "bottom 0.5s ease-in, right 0.5s ease";
  openCount += 1;
  viewCardCount -= 1;
}

function playerDrawCard() {
  // open CardBox 카드 위치
  const offset = document.getElementById(`p2_1`);
  console.log(offset.offsetLeft);

  let deck = document.getElementById(`deck${viewCardCount}`);
  deck.offsetHeight;

  // 덱 뽑고 o
  deck.textContent = cards.pop();
  deck.style.transition = "right 0.5s ease";
  deck.style.bottom = "-373px";
  deck.style.right = `calc(${1538}px - ${offset.offsetLeft}px)`;
  deck.style.transitionDuration = "2s";
  openCount += 1;
  viewCardCount -= 1;
}

play();
