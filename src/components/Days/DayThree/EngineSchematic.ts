import { isNumber, dayThree } from "../../../utils/stringCheckers";

const { isEngineSymbol, isGear } = dayThree;

export class EngineSchematic {
  public rows: string[][] = [[]];
  public partNumbers: number[] = [];
  public gearRatios: number[] = [];
  public currentRow: number = 0;
  public currentColumn: number = 0;
  public endOfSchematic: boolean = true;
  public allowedAdjacentPartNumbers: number = 2;

  private parsePositionForPartNumbers = (posX: number, posY: number) => {
    const numberArray = [];
    const row = this.rows[posY];
    let startingX = posX;
    while (isNumber(row[startingX - 1])) {
      startingX--;
    }

    startingX = startingX < 0 ? 0 : startingX;

    while (startingX < row.length && isNumber(row[startingX])) {
      numberArray.push(row[startingX++]);
    }

    const number = Number(numberArray.join(""));
    return number;
  };

  private checkSpace = (posX: number, posY: number) => {
    const row = this.rows[posY];
    if (!row) {
      return;
    }
    const itemAbove = row[posX];
    if (isNumber(itemAbove)) {
      return this.parsePositionForPartNumbers(posX, posY);
    }
  };

  private checkUpAndToLeft = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn - 1;
    return this.checkSpace(posX, posY);
  };
  private checkUp = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn;
    return this.checkSpace(posX, posY);
  };
  private checkUpAndToRight = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn + 1;
    return this.checkSpace(posX, posY);
  };
  private checkLeft = () => {
    const posY = this.currentRow;
    const posX = this.currentColumn - 1;
    return this.checkSpace(posX, posY);
  };
  private checkRight = () => {
    const posY = this.currentRow;
    const posX = this.currentColumn + 1;
    return this.checkSpace(posX, posY);
  };
  private checkDownAndToLeft = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn - 1;
    return this.checkSpace(posX, posY);
  };
  private checkDown = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn;
    return this.checkSpace(posX, posY);
  };
  private checkDownAndToRight = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn + 1;
    return this.checkSpace(posX, posY);
  };

  private extractAndAddGearRatio = () => {
    const gearPartNumbers = [];
    for (let i = 1; i <= this.allowedAdjacentPartNumbers; i++) {
      const gearNumber = this.partNumbers[this.partNumbers.length - i];
      gearPartNumbers.push(gearNumber);
    }
    const gearRatio = gearPartNumbers.reduce((a, b) => a * b, 1);
    this.gearRatios.push(gearRatio);
  };

  private addToPartNumbers = (n: number | undefined): number => {
    let numAdded = 0;
    if (n) {
      this.partNumbers.push(n);
      numAdded = 1;
    }

    return numAdded;
  };

  // Shout out to https://www.reddit.com/r/adventofcode/comments/18stssw/aoc_2023_day_3_late_starter_could_use_some_help/
  // for inspiration!
  private validateAndAddToPartNumbers = (
    n1: number | undefined,
    n2: number | undefined,
    n3: number | undefined
  ) => {
    let numAdded = 0;
    if (n1 === n2 && n2 === n3) {
      numAdded += this.addToPartNumbers(n1);
    } else if (n1 === n2) {
      numAdded += this.addToPartNumbers(n1);
      numAdded += this.addToPartNumbers(n3);
    } else if (n1 === n3) {
      numAdded += this.addToPartNumbers(n1);
      numAdded += this.addToPartNumbers(n2);
    } else if (n2 === n3) {
      numAdded += this.addToPartNumbers(n1);
      numAdded += this.addToPartNumbers(n2);
    } else {
      numAdded += this.addToPartNumbers(n1);
      numAdded += this.addToPartNumbers(n2);
      numAdded += this.addToPartNumbers(n3);
    }

    return numAdded;
  };

  private checkAboveSpaces = () => {
    const upAndToTheLeft = this.checkUpAndToLeft();
    const up = this.checkUp();
    const upAndToTheRight = this.checkUpAndToRight();
    return this.validateAndAddToPartNumbers(
      upAndToTheLeft,
      up,
      upAndToTheRight
    );
  };

  private checkSideSpaces = () => {
    const left = this.checkLeft();
    const right = this.checkRight();
    let numAdded = 0;

    numAdded += this.addToPartNumbers(left);
    numAdded += this.addToPartNumbers(right);

    return numAdded;
  };

  private checkBelowSpaces = () => {
    const downAndToTheLeft = this.checkDownAndToLeft();
    const down = this.checkDown();
    const downAndToTheRight = this.checkDownAndToRight();
    return this.validateAndAddToPartNumbers(
      downAndToTheLeft,
      down,
      downAndToTheRight
    );
  };

  private checkSpaces = () => {
    let numAdded = 0;

    numAdded += this.checkAboveSpaces();
    numAdded += this.checkSideSpaces();
    numAdded += this.checkBelowSpaces();

    return numAdded;
  };

  constructor(public stringArray: string[]) {
    this.rows = stringArray.map((row) => row.split(""));
    this.endOfSchematic = this.rows.length === 0;
  }

  public nextItem = () => {
    if (this.endOfSchematic) {
      return;
    }

    const currentRow = this.rows[this.currentRow];
    const currentColumn = currentRow[this.currentColumn];

    if (isEngineSymbol(currentColumn)) {
      const numAdded = this.checkSpaces();
      if (isGear(currentColumn)) {
        if (numAdded === this.allowedAdjacentPartNumbers) {
          this.extractAndAddGearRatio();
        }
      }
    }

    if (this.currentRow === this.rows.length - 1) {
      this.currentRow = 0;
      this.currentColumn++;
    } else {
      this.currentRow++;
    }

    if (this.currentColumn >= this.rows[0].length) {
      this.endOfSchematic = true;
    }
  };

  public getSumOfPartNumbers = () => {
    return this.partNumbers.reduce((a, b) => a + b, 0);
  };

  public getSumOfGearRatios = () => {
    return this.gearRatios.reduce((a, b) => a + b, 0);
  };
}
