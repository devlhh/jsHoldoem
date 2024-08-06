let hpx = 0;
let rpx = 0;

function drawCard() {
  // 다 오픈하면 draw 종료
  if (openCount === 5) return;

  // open CardBox 카드 위치
  const offset = document.getElementById(`open${openCount + 1}`);

  let deck = document.getElementById(`deck${viewCardCount}`);
  deck.offsetHeight;

  // 덱 뽑고 o
  openCard[openCount].deck[openCount] = cardDeck.pop();
  openCardView(openCount, deck);

  deck.style.bottom = "49px";
  deck.style.right = `calc(${1448}px - ${offset.offsetLeft}px)`;
  deck.style.transition = "bottom 0.5s ease-in, right 0.5s ease";
  openCount += 1;
}

function playerDrawCard() {
  firstDraw();

  setTimeout(() => {
    secondDraw();
  }, 1000);
}

function firstDraw() {
  // 버튼 비활성화
  betBtnDisAbled();

  // 딜러를기준으로 왼쪽부터 draw
  for (let i = drawIndex; i < player.length; i++) {
    setTimeout(() => {
      let deck = document.getElementById(`deck${viewCardCount}`);
      deck.offsetHeight;

      // 덱 뽑고 o
      player[i].deck[i] = cardDeck.pop();
      playerCardView(i, deck);

      deck.style.transform = `translate(calc(-1395px + ${
        i * 589
      }px - ${rpx}px), calc(404px - ${hpx}px))`;
      deck.style.transition = "0.5s ease";
      deck.style.transitionDuration = `1s`;
      hpx += 1;
      rpx += 1;

      if (i + 1 === player.length) {
        for (let i = 0; i < drawIndex; i++) {
          setTimeout(() => {
            const offset = document.getElementById(`p${i + 1}_1`);

            let deck = document.getElementById(`deck${viewCardCount}`);
            deck.offsetHeight;

            // 덱 뽑고 o
            player[i].deck[i] = cardDeck.pop();
            playerCardView(i, deck);

            deck.style.transform = `translate(calc(-1395px + ${
              i * 589
            }px - ${rpx}px), calc(404px - ${hpx}px))`;
            deck.style.transition = "0.5s ease";
            deck.style.transitionDuration = `1s`;

            hpx += 1;
            rpx += 1;
          }, i * 400 + drawIndex * 400);
        }
      }
    }, i * 300);
  }
}

// 딜러를기준으로 왼쪽부터 draw
function secondDraw() {
  for (let i = drawIndex; i < player.length; i++) {
    setTimeout(() => {
      const offset = document.getElementById(`p${i + 1}_2`);

      let deck = document.getElementById(`deck${viewCardCount}`);
      deck.offsetHeight;

      // 덱 뽑고 o
      // 덱 뽑고 o
      player[i].deck[i] = cardDeck.pop();
      playerCardView(i, deck);

      deck.style.transform = `translate(calc(-1175px + ${
        i * 589
      }px - ${rpx}px), calc(404px - ${hpx}px))`;
      deck.style.transition = "1s ease";
      hpx += 1;
      rpx += 1;

      if (i + 1 === player.length) {
        for (let i = 0; i < drawIndex; i++) {
          setTimeout(() => {
            let deck = document.getElementById(`deck${viewCardCount}`);
            deck.offsetHeight;

            // 덱 뽑고 o
            player[i].deck[i] = cardDeck.pop();
            playerCardView(i, deck);

            deck.style.transform = `translate(calc(-1175px + ${
              i * 589
            }px - ${rpx}px), calc(404px - ${hpx}px))`;
            deck.style.transition = "1s ease";
            deck.style.transitionDelay = "0.3s";

            hpx += 1;
            rpx += 1;
            if (i + 1 === drawIndex) {
              // 플레이어 카드 다 분배 후 버튼 활성화
              setTimeout(() => {
                // 현재 플레이어 총 금액, 배팅금액 div 표시
                for (let i = 0; i < player.length; i++) {
                  setTimeout(() => {
                    if (i + 1 === player.length) {
                      // 버튼 비활성화
                      remainCallMoney();
                    }

                    onAllBettingSum(player[i].currentBet); // 총배팅 금액합산
                    playerBetView(i + 1, i, ""); // 플레이어 배팅금액
                    playerTotalMoneyView(i + 1, i); // 플레이어 총 금액

                    hpx = 0;
                    rpx = 0;
                  }, i * 300);
                }
              }, 1000);
            }
          }, i * 500);
        }
      }
    }, i * 600);
  }
}
