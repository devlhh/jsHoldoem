// 입장 배팅
function onEnterBatting() {
  enterCalc(player[0], player[1]);

  // 현재 플레이어 총 금액, 배팅금액 div 표시
  for (let i = 0; i < player.length; i++) {
    onAllBettingSum(player[i].currentBet); // 총배팅 금액
    playerBetView(i + 1, i);
    playerTotalMoneyView(i + 1, i);
  }
  betBtnAbled();
}
