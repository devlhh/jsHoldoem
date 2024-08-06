const callBtnTag = document.querySelector(".bet_btn_call");
const raseBtnTag = document.querySelector(".bet_btn_rase");
const checkBtnTag = document.querySelector(".bet_btn_check");
const foldBtnTag = document.querySelector(".bet_btn_fold");

const resetButton = document.querySelector(".resetBtn");
const drawButton = document.querySelector(".drawBtn");
const playerDrawButton = document.querySelector(".playerDrawBtn");

function betBtnAbled() {
  callBtnTag.disabled = false;
  raseBtnTag.disabled = false;
  checkBtnTag.disabled = false;
  foldBtnTag.disabled = false;
}

function noCheckBetBtnAbled() {
  callBtnTag.disabled = false;
  raseBtnTag.disabled = false;
  foldBtnTag.disabled = false;
  checkBtnTag.disabled = true;
}

function betBtnDisAbled() {
  callBtnTag.disabled = true;
  raseBtnTag.disabled = true;
  checkBtnTag.disabled = true;
  foldBtnTag.disabled = true;
}

function noCallBetBtnAbled() {
  callBtnTag.disabled = true;
  raseBtnTag.disabled = false;
  checkBtnTag.disabled = false;
  foldBtnTag.disabled = false;
}

function testDisAbled() {
  resetButton.disabled = true;
  drawButton.disabled = true;
  playerDrawButton.disabled = true;
}

function noDrawTest() {
  resetButton.disabled = false;
  drawButton.disabled = false;
}
