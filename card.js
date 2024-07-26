let playerDraw = false;
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

function drawCard() {
  console.log("draw");
  betBtnDisAbled();

  if (openCardIndex === 5) {
    return;
  }
  if (!playerDraw) {
    playerDrawCard();
  } else {
    if (openCardIndex < 3) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          if (i === 2) {
            resetPlayerCall(); // 플레이어 call 했는지 다시  reset
            betBtnAbled();
          }
          openCardEvent(openCardIndex);
          openCardIndex += 1;
        }, i * 500);
      }
    } else {
      openCardEvent(openCardIndex);
      resetPlayerCall();
      openCardIndex += 1;

      if (openCardIndex === 5) {
        betBtnDisAbled();
      }

      if (openCardIndex !== 5) {
        setTimeout(() => {
          betBtnAbled();
        }, 500);
      }
    }
  }

  if (openCardIndex === 4) {
    betBtnDisAbled();
  }
}

function playerDrawCard() {
  for (let i = 0; i < player.length; i++) {
    //플레아어 첫 2개 카드 나눠주기
    for (let i = 0; i < playerCount; i++) {
      setTimeout(() => {
        firstCard(i);
      }, i * 100);
    }
  }

  setTimeout(() => {
    for (let i = 0; i < playerCount; i++) {
      setTimeout(() => {
        if (i === playerCount - 1) {
          betBtnAbled();
        }
        secondCard(i);
      }, i * 400);
    }
  }, 1000);
  playerDraw = true;
}

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
