let enterBetting = 50000;

// 입장 배팅
function onEnterBetting() {
  playerTurn = dealerIndex + 1; // 딜러 다음 turn
  pocket = true;

  // 플레이어 배팅
  enterCalc();

  dealerView();
  sbView();
  bbView();

  playerDrawCard();
}

// sb -> 입장비 반값
// bb -> 입장비 그대로
// 나머진 입장비 x
function enterCalc() {
  if (dealerIndex === player.length) {
    sbIndex = 0;
    bbIndex = 1;
    drawIndex = 0;
  } else {
    sbIndex = dealerIndex + 1;
    bbIndex = dealerIndex + 2;
    drawIndex = sbIndex;
  }

  const sb = player[sbIndex];
  sb.money = sb.money - enterBetting; // 플레이어 총 금액
  sb.enterBetting = enterBetting; // 플레이어 입장비
  sb.currentBet = enterBetting; // 플레이어 현재 배팅금
  nextTurn();

  const bb = player[bbIndex];
  bb.money = bb.money - enterBetting * 2;
  bb.enterBetting = enterBetting * 2;
  bb.currentBet = enterBetting * 2;
  player[bbIndex].isCall = true;

  nextTurn();
}
