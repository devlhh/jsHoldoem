// 입장 배팅
function onEnterBatting() {
  enterCalc(player[0], player[1]);

  // 현재 플레이어 총 금액, 배팅금액 div 표시
  for (let i = 0; i < player.length; i++) {
    onAllBettingSum(player[i].currentBet); // 총배팅 금액합산
    playerBetView(i + 1, i, ""); // 플레이어 배팅금액
    playerTotalMoneyView(i + 1, i); // 플레이어 총 금액
  }
  betBtnAbled();
}

function callBtn() {
  // 1턴이면 이전 플레이어가 막턴플레이어겠지
  //
  if (turn === 1) {
    callCalc(player.length - 1, 0);
  } else {
    callCalc(turn - 2, turn - 1);
  }
  nextTurn();
}

function raseBtn() {
  const raseInput = document.getElementById("raseInput");
  raseInput.className = "raseInputBox";

  const raseConfirm = document.getElementById("raseConfirm");
  raseConfirm.className = "raseConfirm";

  const battingBox = document.getElementById("betBox");
  battingBox.appendChild(raseInput);
}

function onRaseConfirm() {
  const raseInput = document.getElementById("raseInput");
}
