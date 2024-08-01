// 입장 배팅
function onEnterBetting() {
  // 플레이어 배팅
  enterCalc();

  // 현재 플레이어 총 금액, 배팅금액 div 표시
  for (let i = 0; i < player.length; i++) {
    onAllBettingSum(player[i].currentBet); // 총배팅 금액합산
    playerBetView(i + 1, i, ""); // 플레이어 배팅금액
    playerTotalMoneyView(i + 1, i); // 플레이어 총 금액
  }
}

// sb -> 입장비 반값
// bb -> 입장비 그대로
// 나머진 입장비 x
function enterCalc() {
  const sb = player[dealerTurn + 1];
  sb.money = sb.money - enterBatting / 2; // 플레이어 총 금액
  sb.enterBetting = enterBatting / 2; // 플레이어 입장비
  sb.currentBet = enterBatting / 2; // 플레이어 현재 배팅금

  bb.money = bb.money - enterBatting;
  bb.enterBetting = enterBatting;
  bb.currentBet = enterBatting;
}

function blindResult() {}
