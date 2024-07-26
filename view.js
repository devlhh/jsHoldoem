const totalBattingMoney = document.getElementById("total_batting_money");

// 플레이어 배팅타입 -> 콜, 레이즈, 체크, 폴드
function betTitleView(p_index, title) {
  const playerBetView = document.getElementById(`p${p_index}_bettingTitle`);
  playerBetView.innerHTML = title;
}

// 플레이어 현재 총 money
function playerTotalMoneyView(p_index, index) {
  const playerTotalMoney = document.getElementById(`p${p_index}_total_money`);
  playerTotalMoney.innerHTML = player[index].money;
}

// 플레이어 현재 배팅 금액
function playerBetView(p_index, index) {
  const playerBatting = document.getElementById(`p${p_index}_batting_money`);
  playerBatting.innerHTML = player[index].currentBet;
}

// 총배팅금액 view
function allBettingMoneyView() {
  totalBattingMoney.innerHTML = totalBatting;
}
