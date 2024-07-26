function createCard(value, playerIndex, deckIndex) {
  const cardItems = document.createElement("div");

  const card = document.getElementsByClassName(value)[0];
  cardItems.className = "card";
  cardItems.textContent = player[playerIndex].deck[deckIndex].view;
  cardItems.style.animation = "shuffle 0.5s";
  card.appendChild(cardItems);
  // playBtnTag.disabled = "disabled";
}

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
  console.log(openCard);
  // openCard[index].symbol[index] = openCard[index].deck[index].symbol; // 카드문양
  // openCard[index].number[index] = openCard[index].deck[index].number; // 카드숫자
  // createOpenCard(`d${index + 1}`, index, index); // 카드 만들기
}
