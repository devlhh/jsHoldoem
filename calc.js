// sb -> 입장비 반값
// bb -> 입장비 그대로
// 나머진 입장비 x

function enterCalc(sb, bb) {
  sb.money = sb.money - enterBatting / 2; // 플레이어 총 금액
  sb.enterBetting = enterBatting / 2; // 플레이어 입장비
  sb.currentBet = enterBatting / 2; // 플레이어 현재 배팅금

  bb.money = bb.money - enterBatting;
  bb.enterBetting = enterBatting;
  bb.currentBet = enterBatting;
}

function callCalc(prevPlayerIndex, currentPlayerIndex) {
  const prevPlayer = player[prevPlayerIndex];
  const currentPlayer = player[currentPlayerIndex];

  const prevBet = prevPlayer.currentBet;
  const callBet = prevBet - currentPlayer.currentBet;
  console.log("현재콜벳 --> ", callBet);

  // 플레이어 합계, 현재 배팅금액
  currentPlayer.money = currentPlayer.money - callBet;
  currentPlayer.currentBet = callBet + currentPlayer.currentBet;

  currentPlayer.isCall = true; // 콜뱃 여부

  playerTotalMoneyView(currentPlayerIndex + 1, currentPlayerIndex); // 플레이어 총 금액
  playerBetView(currentPlayerIndex + 1, currentPlayerIndex, "call"); // 플레이어 배팅 금액
  onAllBettingSum(callBet); // 총 배팅 금액

  allCallResult(); // 전체 플레이어 콜 여부확인
}

// 총 배팅 금액 합
function onAllBettingSum(money) {
  totalBatting += money;
  allBettingMoneyView();
}

function allCallResult() {
  let callCheck = true;
  player.forEach((x) => {
    if (!x.isCall) {
      callCheck = false;
    }
  });

  // 다 콜했으면 card 뽑기
  if (callCheck) {
    drawCard();
  }
}

function resetPlayerCall() {
  for (let i = 0; i < player.length; i++) {
    player[i].isCall = false;
  }
}
