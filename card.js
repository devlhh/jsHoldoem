let hpx = 1;
let rpx = 0;

function drawCard() {
  // 다 오픈하면 draw 종료
  if (openCount === 5) {
    return;
  }

  // open CardBox 카드 위치
  const offset = document.getElementById(`open${openCount + 1}`);

  let deck = document.getElementById(`deck${viewCardCount}`);
  deck.offsetHeight;

  // 덱 뽑고 o
  openCard[openCount].deck[openCount] = cardDeck.pop();
  openCardView(openCount, deck);

  deck.style.bottom = "49px";
  deck.style.right = `calc(${1449}px - ${offset.offsetLeft}px)`;
  deck.style.transition = "bottom 0.5s ease-in, right 0.5s ease";
  openCount += 1;

  if (openCount === 5) {
    cardPair();
  }
}

function playerDrawCard() {
  // 플레이어들 첫 카드
  firstDraw();

  // 플레이어들 두 번째 카드
  setTimeout(() => {
    secondDraw();
  }, 1000);
}

function firstDraw() {
  // 버튼 비활성화
  betBtnDisAbled();

  // sb부터 카드 분배
  for (let i = drawIndex; i < player.length; i++) {
    setTimeout(() => {
      let deck = document.getElementById(`deck${viewCardCount}`);
      deck.offsetHeight;

      // 덱 뽑기
      player[i].deck[0] = cardDeck.pop();
      playerCardView(i, 0, deck);

      deck.style.transform = `translate(calc(-1395px + ${
        i * 589
      }px - ${rpx}px), calc(404px - ${hpx}px))`;
      deck.style.transition = "0.5s ease";
      deck.style.transitionDuration = `1s`;
      hpx += 1;
      rpx += 1;

      // 0 ~ sb 이전 순서까지 카드분배
      if (i === player.length - 1) {
        for (let i = 0; i < drawIndex; i++) {
          setTimeout(() => {
            let deck = document.getElementById(`deck${viewCardCount}`);
            deck.offsetHeight;

            // 덱 뽑고 o
            player[i].deck[0] = cardDeck.pop();
            playerCardView(i, 0, deck);

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
  // sb ~ 끝플레이어
  for (let i = drawIndex; i < player.length; i++) {
    setTimeout(() => {
      let deck = document.getElementById(`deck${viewCardCount}`);
      deck.offsetHeight;

      // 덱 뽑고 o
      player[i].deck[1] = cardDeck.pop();
      playerCardView(i, 1, deck);

      deck.style.transform = `translate(calc(-1175px + ${
        i * 589
      }px - ${rpx}px), calc(404px - ${hpx}px))`;
      deck.style.transition = "1s ease";
      hpx += 1;
      rpx += 1;

      // 끝플레이어왔으면 0 ~ sb순서까지
      if (i === player.length - 1) {
        for (let i = 0; i < drawIndex; i++) {
          setTimeout(() => {
            let deck = document.getElementById(`deck${viewCardCount}`);
            deck.offsetHeight;

            // 덱 뽑고 o
            player[i].deck[1] = cardDeck.pop();
            playerCardView(i, 1, deck);

            deck.style.transform = `translate(calc(-1175px + ${
              i * 589
            }px - ${rpx}px), calc(404px - ${hpx}px))`;
            deck.style.transition = "1s ease";
            deck.style.transitionDelay = "0.3s";

            hpx += 1;
            rpx += 1;
          }, i * 500);

          if (i === drawIndex - 1) {
            setTimeout(() => {
              onEnterBetting();
              noCheckBetBtnAbled();
            }, i * 500 + drawIndex * 1000);
          }
        }
      }
    }, i * 600);
  }
}
