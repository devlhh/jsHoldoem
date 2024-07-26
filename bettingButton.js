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
