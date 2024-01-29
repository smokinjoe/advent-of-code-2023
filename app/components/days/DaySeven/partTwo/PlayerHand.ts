import {
  Hands,
  Hand,
  JokerDeckCard,
  StandardDeckCard,
  //   JokerDeckCardStrength,
  //   StandardDeckCardStrength,
} from "../types";

// const isJokerDeckHand = (card: unknown): card is JokerDeckCard[] => {
//   return JokerDeckCardStrength.includes(card as JokerDeckCard);
// };

// const isStandardDeckHand = (card: unknown): card is StandardDeckCard[] => {
//   return StandardDeckCardStrength.includes(card as StandardDeckCard);
// };

// Joker Deck Player Hand

// export class PlayerHand<T extends StandardDeckCard | JokerDeckCard> {
export class PlayerHand {
  //   public guid: string = "";
  public cards: JokerDeckCard[] = [];
  public handType: Hand = Hands.Null;
  public bid: number = 0;
  //   public deckType: T = T;

  private getStandardDeckHandType(): Hand {
    const cardCount = this.cards.reduce((acc, card) => {
      acc[card] = acc[card] ? acc[card] + 1 : 1;
      return acc;
    }, {} as { [key in StandardDeckCard]: number });

    const cardCountValues = Object.values(cardCount);

    if (cardCountValues.includes(5)) {
      return Hands.FiveOfAKind;
    }

    if (cardCountValues.includes(4)) {
      return Hands.FourOfAKind;
    }

    if (cardCountValues.includes(3) && cardCountValues.includes(2)) {
      return Hands.FullHouse;
    }

    if (cardCountValues.includes(3)) {
      return Hands.ThreeOfAKind;
    }

    if (cardCountValues.filter((count) => count === 2).length === 2) {
      return Hands.TwoPair;
    }

    if (cardCountValues.includes(2)) {
      return Hands.OnePair;
    }

    return Hands.HighCard;
  }

  private getJokerDeckHandType(): Hand {
    let jokerCount = 0;
    const cardCounts = this.cards.reduce((acc, card) => {
      if (card === "J") {
        jokerCount += 1;
        return acc;
      }
      acc[card] = acc[card] ? acc[card] + 1 : 1;
      return acc;
    }, {} as { [key in StandardDeckCard]: number });

    const cardCountValues = Object.values(cardCounts);

    if (cardCountValues.includes(5)) {
      return Hands.FiveOfAKind;
    }

    let cardCount = 0;

    for (let i = 5; i !== 0; i--) {
      if (cardCountValues.includes(i)) {
        cardCount = i;
        break;
      }
    }

    cardCount += jokerCount;

    if (jokerCount === 0) {
      if (cardCountValues.includes(5)) {
        return Hands.FiveOfAKind;
      }

      if (cardCountValues.includes(4)) {
        return Hands.FourOfAKind;
      }

      if (cardCountValues.includes(3) && cardCountValues.includes(2)) {
        return Hands.FullHouse;
      }

      if (cardCountValues.includes(3)) {
        return Hands.ThreeOfAKind;
      }

      if (cardCountValues.filter((count) => count === 2).length === 2) {
        return Hands.TwoPair;
      }

      if (cardCountValues.includes(2)) {
        return Hands.OnePair;
      }

      return Hands.HighCard;
    }

    if (cardCount === 5) {
      return Hands.FiveOfAKind;
    }

    if (cardCount === 4) {
      return Hands.FourOfAKind;
    }

    if (
      cardCount === 3 &&
      cardCountValues.filter((item) => item === 2).length === 2
    ) {
      return Hands.FullHouse;
    }

    if (cardCount === 3) {
      return Hands.ThreeOfAKind;
    }

    if (
      jokerCount === 0 &&
      cardCountValues.filter((count) => count === 2).length === 2
    ) {
      return Hands.TwoPair;
    }

    if (cardCount === 2) {
      return Hands.OnePair;
    }

    return Hands.HighCard;
  }

  private getHandType(): Hand {
    // if (isStandardDeckHand(this.cards[0])) {
    //   return this.getStandardDeckHandType();
    // }
    // if (isJokerDeckHand(this.cards[0])) {
    //   return this.getJokerDeckHandType();
    // }
    // throw "Invalid deck type.";
    return this.getJokerDeckHandType();
  }

  constructor(data: string) {
    const [hand, bid] = data.split(" ");
    this.cards = hand.split("") as T[];
    this.bid = parseInt(bid);
    this.handType = this.getHandType();
    // this.guid = crypto.randomUUID();
  }
}
