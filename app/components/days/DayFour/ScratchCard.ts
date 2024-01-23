export class ScratchCard {
  public id: number = -1;
  // These are the numbers that are explicitly determined to be winners
  public winningScratchNumbers: number[] = [];
  public winningScratchNumberHash: { [key: number]: boolean } = {};

  // These are the card numbers that are scratched off
  public scratchNumbers: number[] = [];

  // The numbers that are scratched off that are also winners
  public actualWinningScratchNumbers: number[] = [];

  // The card score value
  public prizeScore: number = 0;

  private buildWinningScratchNumberHash = () => {
    this.winningScratchNumbers.forEach((num) => {
      this.winningScratchNumberHash[num] = true;
    });
  };

  private determinePrizeScore = () => {
    this.scratchNumbers.forEach((num) => {
      if (this.winningScratchNumberHash[num]) {
        this.actualWinningScratchNumbers.push(num);
      }
    });

    this.prizeScore =
      this.actualWinningScratchNumbers.length === 0
        ? 0
        : Math.pow(2, this.actualWinningScratchNumbers.length - 1);
  };

  constructor(stringRow: string) {
    const [id, numberString] = stringRow.split(":");
    this.id = parseInt(id.replace("Card ", "").trim());
    const [winningScratchNumbers, scratchNumbers] = numberString.split("|");

    this.winningScratchNumbers = winningScratchNumbers
      .split(" ")
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));

    this.scratchNumbers = scratchNumbers
      .split(" ")
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));

    this.buildWinningScratchNumberHash();

    this.determinePrizeScore();
  }
}
