const callBtnTag = document.getElementById("bat_btn_call");
const raseBtnTag = document.getElementById("bat_btn_rase");
const checkBtnTag = document.getElementById("bat_btn_check");
const foldBtnTag = document.getElementById("bat_btn_fold");

function betBtnAbled() {
  callBtnTag.disabled = "";
  raseBtnTag.disabled = "";
  checkBtnTag.disabled = "";
  foldBtnTag.disabled = "";
}

function noCheckBetBtnAbled() {
  callBtnTag.disabled = "";
  raseBtnTag.disabled = "";
  foldBtnTag.disabled = "";
}

function betBtnDisAbled() {
  callBtnTag.disabled = "disabled";
  raseBtnTag.disabled = "disabled";
  checkBtnTag.disabled = "disabled";
  foldBtnTag.disabled = "disabled";
}
