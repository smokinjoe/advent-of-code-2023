// import { convertMultiLineStringToArray } from "~/utils/string";

// const insert = <T>(arr: T[], index: number, newItem: T): Array<T> => [
//   // part of the array before the specified index
//   ...arr.slice(0, index),
//   // inserted item
//   newItem,
//   // part of the array after the specified index
//   ...arr.slice(index),
// ];

/*
6K6J6 1
K6866 1
J5565 1
JJQJ4 1
AAKA9 1
JJ2J9 1
*/

const Hands = {
  FiveOfAKind: "five-of-a-kind",
  FourOfAKind: "four-of-a-kind",
  FullHouse: "full-house",
  ThreeOfAKind: "three-of-a-kind",
  TwoPair: "two-pair",
  OnePair: "one-pair",
  HighCard: "high-card",
  Null: "null",
} as const;

type Hand = (typeof Hands)[keyof typeof Hands];

const HandStrength: Record<Hand, number> = {
  [Hands.FiveOfAKind]: 7,
  [Hands.FourOfAKind]: 6,
  [Hands.FullHouse]: 5,
  [Hands.ThreeOfAKind]: 4,
  [Hands.TwoPair]: 3,
  [Hands.OnePair]: 2,
  [Hands.HighCard]: 1,
  [Hands.Null]: 0,
} as const;

const CardStrength = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
] as const;

type Card = (typeof CardStrength)[number];

class PlayerHand {
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

class PlayerHands {
  public playerHands: PlayerHand[] = [];

  private sortPlayerHandsByHandType() {
    this.playerHands.sort((a, b) => {
      if (HandStrength[a.handType] > HandStrength[b.handType]) {
        return -1;
      }

      if (HandStrength[a.handType] < HandStrength[b.handType]) {
        return 1;
      }

      return 0;
    });
  }

  private isCardWeakerThanCard(card: Card, otherCard: Card): boolean {
    return CardStrength.indexOf(card) < CardStrength.indexOf(otherCard);
  }

  private isCardStrongerThenCard(card: Card, otherCard: Card): boolean {
    return CardStrength.indexOf(card) > CardStrength.indexOf(otherCard);
  }

  private sortPlayerHandsByStrongestCard() {
    const handsToSort: PlayerHand[] = [...this.playerHands];
    const sortedHands: PlayerHand[] = [];

    while (handsToSort.length > 0) {
      const hand = handsToSort.shift() as PlayerHand;

      // Sorted hands array is empty, so just add the hand to the array
      if (sortedHands.length === 0) {
        sortedHands.push(hand);
        continue;
      }

      // Now to test if the hand is stronger than the first hand in the sorted hands array

      // If it's not the same hand type, then we can just add it to the array as the next strongest hand
      if (hand.handType !== sortedHands[sortedHands.length - 1].handType) {
        sortedHands.push(hand);
        continue;
      }

      // If it's the same hand type, then we need to compare the card strength
      if (hand.handType === sortedHands[sortedHands.length - 1].handType) {
        const handCards = [...hand.cards];
        const sortedHandCards = [...sortedHands[sortedHands.length - 1].cards];

        while (handCards.length > 0) {
          const handCard = handCards.shift() as Card;
          const sortedHandCard = sortedHandCards.shift() as Card;

          // console.log(
          //   `JOE: handCard:${handCard}: CardStrength.indexOf(${handCard})`,
          //   CardStrength.indexOf(handCard)
          // );
          // console.log(
          //   `JOE: sortedHandCard:${sortedHandCard}: CardStrength.indexOf(${sortedHandCard})`,
          //   CardStrength.indexOf(sortedHandCard)
          // );

          if (this.isCardWeakerThanCard(handCard, sortedHandCard)) {
            // console.log(
            //   `JOE: insert ${hand.cards.join("")} after ${sortedHands[
            //     sortedHands.length - 1
            //   ].cards.join("")}`
            // );
            sortedHands.push(hand);
            break;
          }

          if (this.isCardStrongerThenCard(handCard, sortedHandCard)) {
            // console.log(
            //   `JOE: insert ${hand.cards.join("")} before ${sortedHands[
            //     sortedHands.length - 1
            //   ].cards.join("")}`
            // );
            sortedHands.splice(sortedHands.length - 1, 0, hand);
            break;
          }
        }
      }
    }

    this.playerHands = sortedHands.reverse();
  }

  constructor(data: string) {
    this.playerHands = data.split("\n").map((handString) => {
      return new PlayerHand(handString);
    });

    this.sortPlayerHandsByHandType();
    this.sortPlayerHandsByStrongestCard();
  }

  public getBidValues(): number {
    let totalValue = 0;
    this.playerHands.forEach((hand, index) => {
      totalValue += hand.bid * (index + 1);
    });
    return totalValue;
  }

  public getHands(): string[] {
    return this.playerHands.map((hand) => {
      return `${hand.handType}: ${hand.cards.join("")}`;
    });
  }
}

export const partOneHandler = (data: string) => {
  const playerHands = new PlayerHands(data);
  console.log("JOE: Hands", playerHands.getHands());
  console.log("JOE: playerHands: ", playerHands);
  return playerHands.getBidValues();
};
