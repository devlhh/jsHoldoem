let enterBetting = 50000;

// 입장 배팅
function onEnterBetting() {
  playerTurn = dealerIndex + 1; // 딜러 다음 turn

  // 플레이어 배팅
  enterCalc();

  for (let i = 0; i < player.length; i++) {
    setTimeout(() => {
      playerBetView(i + 1, i);
      playerTotalMoneyView(i + 1, i);
      allBettingMoneyView(i + 1, i);
    }, i * 500);
  }
}

// sb -> 입장비 반값
// bb -> 입장비 그대로
// 나머진 입장비 x
function enterCalc() {
  const sb = player[sbIndex];
  sb.money = sb.money - enterBetting; // 플레이어 총 금액
  sb.enterBetting = enterBetting; // 플레이어 입장비
  sb.currentBet = enterBetting; // 플레이어 현재 배팅금
  pocketTurn();

  const bb = player[bbIndex];
  bb.money = bb.money - enterBetting * 2;
  bb.enterBetting = enterBetting * 2;
  bb.currentBet = enterBetting * 2;
  player[bbIndex].isCall = true;

  pocketTurn();
}
