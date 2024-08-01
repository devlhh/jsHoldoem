let openCardIndex = 0;

// player 카드
function createCard(value, playerIndex, deckIndex) {
  const cardItems = document.createElement("div");

  const card = document.getElementsByClassName(value)[0];
  cardItems.className = "card";
  cardItems.textContent = player[playerIndex].deck[deckIndex].view;
  cardItems.style.animation = "shuffle 0.5s";
  card.appendChild(cardItems);
  // playBtnTag.disabled = "disabled";
}

// 딜러쪽 오픈카드
function createOpenCard(value, Index, deckIndex) {
  const cardItems = document.createElement("div");

  const card = document.getElementsByClassName(value)[0];
  cardItems.className = "card";
  cardItems.textContent = openCard[Index].deck[deckIndex].view;
  cardItems.style.animation = "shuffle 0.5s";
  card.appendChild(cardItems);
}

function openCardEvent(index) {
  openCard[index].deck[index] = cardDeck.pop(); // 카드뽑고
  openCard[index].symbol[index] = openCard[index].deck[index].symbol; // 카드문양
  openCard[index].number[index] = openCard[index].deck[index].number; // 카드숫자
  createOpenCard(`d${index + 1}`, index, index); // 카드 만들기
}

function drawCard() {}

function playerDrawCard() {}

// 플레이어 카드
function firstCard(playerIndex) {
  player[playerIndex].deck[0] = cardDeck.pop(); // 카드뽑고
  player[playerIndex].symbol[0] = player[playerIndex].deck[0].symbol; // 카드문양
  player[playerIndex].number[0] = player[playerIndex].deck[0].number; // 카드숫자
  createCard(`p${playerIndex + 1}_1`, playerIndex, 0); // 카드 만들기
}

function secondCard(playerIndex) {
  player[playerIndex].deck[1] = cardDeck.pop(); // 카드뽑고
  player[playerIndex].symbol[1] = player[playerIndex].deck[1].symbol; // 카드문양
  player[playerIndex].number[1] = player[playerIndex].deck[1].number; // 카드숫자
  createCard(`p${playerIndex + 1}_2`, playerIndex, 1); // 카드 만들기
}
