import { convertMultiLineStringToArray } from "~/utils/string";

import { ScratchCard } from "./ScratchCard";

export class ScratchCardCollection {
  public scratchCards: ScratchCard[] = [];
  public numCardsAvailable: { [key: number]: number } = {};

  constructor(data: string) {
    const scratchCardData = convertMultiLineStringToArray(data);
    this.scratchCards = scratchCardData.map((cardDataRow) => {
      return new ScratchCard(cardDataRow);
    });

    this.scratchCards.forEach((card) => {
      this.numCardsAvailable[card.id] = 1;
    });
  }

  public get totalPrizeScore() {
    return this.scratchCards.reduce((acc, card) => {
      return acc + card.prizeScore;
    }, 0);
  }

  public get totalCardsWon() {
    this.scratchCards.forEach((card) => {
      for (let i = 1; i <= this.numCardsAvailable[card.id]; i++) {
        for (let j = 1; j <= card.actualWinningScratchNumbers.length; j++) {
          this.numCardsAvailable[card.id + j] += 1;
        }
      }
    });

    return Object.values(this.numCardsAvailable).reduce((acc, val) => {
      return acc + val;
    }, 0);
  }
}
