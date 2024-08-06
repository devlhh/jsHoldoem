function callBet() {
  betTitleView(playerTurn + 1, "call");
  callCalc();
  playerTotalMoneyView(playerTurn + 1, playerTurn);
  playerBetView(playerTurn + 1, playerTurn);
  nextTurn();
}

function checkBet() {
  betTitleView(playerTurn + 1, "check");
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

function checkBtn() {}

function foldBtn() {}
