let cardAmount = 52;
let cardDeck = [];
let openCard = [];
let player = [];

function setCard() {
  for (let i = 0; i < 13; i++) {
    if (i < 10) {
      if (i === 0) {
        cardDeck[i] = {
          symbol: "♠",
          number: 1,
          view: "♠ A",
        };
      } else {
        cardDeck[i] = {
          symbol: "♠",
          number: i + 1,
          view: `♠ ${i + 1}`,
        };
      }
    }

    if (i === 10) {
      cardDeck[i] = {
        symbol: "♠",
        number: 10,
        view: "♠ J",
      };
    }

    if (i === 11) {
      cardDeck[i] = {
        symbol: "♠",
        number: 11,
        view: "♠ Q",
      };
    }

    if (i === 12) {
      cardDeck[i] = {
        symbol: "♠",
        number: 12,
        view: "♠ K",
      };
    }
  }

  for (let i = 13; i < 27; i++) {
    if (i < 23) {
      if (i === 13) {
        cardDeck[i] = {
          symbol: "◆",
          number: 1,
          view: "◆ A",
        };
      } else {
        cardDeck[i] = {
          symbol: "◆",
          number: i - 12,
          view: `◆ ${i - 12}`,
        };
      }
    }

    if (i === 23) {
      cardDeck[i] = {
        symbol: "◆",
        number: i - 12,
        view: `◆ J`,
      };
    }

    if (i === 24) {
      cardDeck[i] = {
        symbol: "◆",
        number: i - 12,
        view: `◆ Q`,
      };
    }

    if (i === 25) {
      cardDeck[i] = {
        symbol: "◆",
        number: i - 12,
        view: `◆ K`,
      };
    }
  }

  for (let i = 26; i < 39; i++) {
    if (i < 36) {
      if (i === 26) {
        cardDeck[i] = {
          symbol: "♥",
          number: i - 25,
          view: `♥ A`,
        };
      } else {
        cardDeck[i] = {
          symbol: "♥",
          number: i - 25,
          view: `♥ ${i - 25}`,
        };
      }
    }

    if (i === 36) {
      cardDeck[i] = {
        symbol: "♥",
        number: i - 25,
        view: `♥ J`,
      };
    }

    if (i === 37) {
      cardDeck[i] = {
        symbol: "♥",
        number: i - 25,
        view: `♥ Q`,
      };
    }

    if (i === 38) {
      cardDeck[i] = {
        symbol: "♥",
        number: i - 25,
        view: `♥ K`,
      };
    }
  }

  for (let i = 39; i < 52; i++) {
    if (i < 49) {
      if (i === 39) {
        cardDeck[i] = {
          symbol: "♣",
          number: i - 38,
          view: `♣ A`,
        };
      } else {
        cardDeck[i] = {
          symbol: "♣",
          number: i - 38,
          view: `♣ ${i - 38}`,
        };
      }
    }

    if (i === 49) {
      cardDeck[i] = {
        symbol: "♣",
        number: i - 38,
        view: `♣ J`,
      };
    }

    if (i === 50) {
      cardDeck[i] = {
        symbol: "♣",
        number: i - 38,
        view: `♣ Q`,
      };
    }

    if (i === 51) {
      cardDeck[i] = {
        symbol: "♣",
        number: i - 38,
        view: `♣ K`,
      };
    }
  }

  cardDeck.sort(() => Math.random() - 0.5);

  for (let i = 0; i < cardAmount; i++) {
    setTimeout(() => {
      const cardItems = document.createElement("div");
      cardItems.className = `setCard card${i + 1}`;
      cardItems.id = `card${i + 1}`;
      cardItems.style.zIndex = i * 2;

      if (i < 10) {
        cardItems.style.bottom = `${i * 5 + 30}px`;
        cardItems.style.right = `${i * 4 + 16}px`;
      } else {
        cardItems.style.bottom = `${9 * 5 + 30}px`;
        cardItems.style.right = `${9 * 4 + 16}px`;
      }

      cardItems.style.background = "#F0F0F0";

      const setCardTag = document.getElementsByClassName("setCardList")[0];
      setCardTag.appendChild(cardItems);
    }, i * 20);
  }
}

function setOpenCard() {
  for (let i = 0; i < 5; i++) {
    openCard[i] = {
      deck: [],
      symbol: [],
      number: [],
    };
  }
}

function setPlayer() {
  for (let i = 0; i < playerCount; i++) {
    player[i] = {
      id: `player${i}`,
      money: 5000000,
      deck: [],
      symbol: [],
      number: [],
      enterBetting: 0,
      currentBet: 0,
      isCall: false,
      isRase: false,
      isCheck: false,
      isFold: false,
    };
  }
}

function setMoney() {
  for (let i = 0; i < player.length; i++) {
    const playerTotalMoney = document.getElementById(`p${i + 1}_total_money`);
    playerTotalMoney.innerHTML = player[i].money;

    const playerBatting = document.getElementById(`p${i + 1}_batting_money`);
    playerBatting.innerHTML = "0";
  }
}
