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
  remainCallMoney();
}

function remainCallMoney() {
  const betMoney = player[prevTurn].currentBet;
  const remainCallMoney = betMoney - player[playerTurn].currentBet;

  if (remainCallMoney > 0) {
    noCheckBetBtnAbled();
  } else {
    betBtnAbled();
  }
}

function raseCheck() {
  let rase = false;
  for (let i = 0; i < player.length; i++) {
    const raseResult = player[i].isRase;
    player[i].isCall = false;
    player[i].isRase = false;

    if (raseResult) {
      rase = true;
    }
  }

  if (rase) {
  } else {
    noCallBetBtnAbled();

    if (pocket) {
      pocket = false;
    }

    for (let i = 0; i < 3; i++) {
      if (openCount < 3) {
        setTimeout(() => {
          drawCard();
        }, i * 300);
      } else {
        drawCard();
      }
    }
  }
}

function resetPlayerCall() {}
