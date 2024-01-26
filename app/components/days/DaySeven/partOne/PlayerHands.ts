import { bubbleSort } from "../bubbleSort";
import { PlayerHand } from "./PlayerHand";
import { Card, CardStrength, HandStrength } from "./types";

export class PlayerHands {
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

    const sortedHands: PlayerHand[] = bubbleSort(
      handsToSort,
      (hand, otherHand) => {
        if (hand.handType === otherHand.handType) {
          const handCards = [...hand.cards];
          const otherHandCards = [...otherHand.cards];

          while (handCards.length > 0) {
            const handCard = handCards.shift() as Card;
            const otherHandCard = otherHandCards.shift() as Card;

            if (this.isCardWeakerThanCard(handCard, otherHandCard)) {
              return true;
            }

            if (this.isCardStrongerThenCard(handCard, otherHandCard)) {
              return false;
            }
          }
        }

        return false;
      }
    );

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
