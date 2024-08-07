// 총 배팅 금액 합
function onAllBettingSum(money) {
  pot += money;
  allBettingMoneyView();
}

function callCalc() {
  const betMoney = player[prevTurn].currentBet;
  const remainMoney = betMoney - player[playerTurn].currentBet;

  player[playerTurn].currentBet += remainMoney;
  player[playerTurn].money -= remainMoney;
  player[playerTurn].isCall = true;

  onAllBettingSum(remainMoney);
}

function remainCallMoney() {
  let result = false;
  const betMoney = player[prevTurn].currentBet;
  const remainCallMoney = betMoney - player[playerTurn].currentBet;

  if (remainCallMoney > 0) {
    result = true;
  }
  return result;
}

function raseCheck() {}

function resetPlayerCall() {}
