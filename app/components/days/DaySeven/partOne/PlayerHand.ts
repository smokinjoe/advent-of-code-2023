import { Card, Hands, Hand } from "./types";

export class PlayerHand {
  public guid: string = "";
  public cards: Card[] = [];
  public handType: Hand = Hands.Null;
  public bid: number = 0;

  private getHandType(): Hand {
    const cardCount = this.cards.reduce((acc, card) => {
      acc[card] = acc[card] ? acc[card] + 1 : 1;
      return acc;
    }, {} as { [key in Card]: number });

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

  constructor(data: string) {
    const [hand, bid] = data.split(" ");
    this.cards = hand.split("") as Card[];
    this.bid = parseInt(bid);
    this.handType = this.getHandType();
    this.guid = crypto.randomUUID();
  }
}
