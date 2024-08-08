const potBox = document.getElementById("potMoney");

// 플레이어 배팅타입 -> 콜, 레이즈, 체크, 폴드
function betTitleView(p_index, title) {
  const playerBetView = document.getElementById(`p${p_index}_betTitle`);
  playerBetView.innerHTML = title;

  playerBetView.style.animation = "betTitleAni 1s forwards";
}

// 플레이어 현재 총 money
function playerTotalMoneyView(p_index, index) {
  const playerTotalMoney = document.getElementById(`p${p_index}_money`);
  playerTotalMoney.innerHTML = player[index].money;
}

// 플레이어 현재 배팅 금액
function playerBetView(p_index, index) {
  const playerBetting = document.getElementById(`p${p_index}_betBox`);
  playerBetting.innerHTML = player[index].currentBet;
}

// 총배팅금액 view
function allBettingMoneyView() {
  potBox.innerHTML = pot;
}

// 플레이어 카드 view
function playerCardView(p_index, deckIndex, deck) {
  deck.textContent = player[p_index].deck[deckIndex].view;

  if (
    player[p_index].deck[deckIndex].symbol === "◆" ||
    player[p_index].deck[deckIndex].symbol === "♥"
  ) {
    deck.style.color = "red";
  }
  viewCardCount -= 1;
}

function dealerView() {
  const div = document.createElement("div");
  div.className = "dealer";
  div.innerHTML = "D";

  const pBox = document.getElementById(`p${dealerIndex + 1}_box`);
  pBox.appendChild(div);
}

function sbView() {
  const div = document.createElement("div");
  div.className = "sb";
  div.innerHTML = "SB";

  const pBox = document.getElementById(`p${dealerIndex + 2}_box`);
  pBox.appendChild(div);
}

function bbView() {
  const div = document.createElement("div");
  div.className = "bb";
  div.innerHTML = "BB";

  const pBox = document.getElementById(`p${dealerIndex + 3}_box`);
  pBox.appendChild(div);
}

function openCardView(index, deck) {
  deck.textContent = openCard[index].deck[index].view;
  viewCardCount -= 1;
}
