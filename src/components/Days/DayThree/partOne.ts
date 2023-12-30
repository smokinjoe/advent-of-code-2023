import { convertMultiLineStringToArray } from "../../../utils/stringReader";

/*
// Test data

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

11....
.*....

..23..
..*...
.....*
...55.
*/

const isNumber = (value: string): boolean => !isNaN(Number(value));
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const isSymbol = (value: string): boolean =>
  value.match(/^[@#$%&*-+=//]*$/) ? true : false;
const isEngineSymbol = (value: string): boolean =>
  !isNumber(value) && value !== ".";

class EngineSchematic {
  public rows: string[][] = [[]];
  public storedNumbers: number[] = [];
  public currentRow: number = 0;
  public currentColumn: number = 0;
  public endOfSchematic: boolean = true;

  // TODO: This is removing valid values
  // Now is unused
  private deDupeStoredNumbers = () => {
    const uniqueNumbers = new Set(this.storedNumbers);
    this.storedNumbers = Array.from(uniqueNumbers);
  };

  private parsePosition = (posX: number, posY: number) => {
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

  private checkItem = (posX: number, posY: number) => {
    const row = this.rows[posY];
    if (!row) {
      return;
    }
    const itemAbove = row[posX];
    if (isNumber(itemAbove)) {
      return this.parsePosition(posX, posY);
    }
  };

  private checkUpAndToLeft = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn - 1;
    return this.checkItem(posX, posY);
  };
  private checkUp = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn;
    return this.checkItem(posX, posY);
  };
  private checkUpAndToRight = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn + 1;
    return this.checkItem(posX, posY);
  };
  private checkLeft = () => {
    const posY = this.currentRow;
    const posX = this.currentColumn - 1;
    return this.checkItem(posX, posY);
  };
  private checkRight = () => {
    const posY = this.currentRow;
    const posX = this.currentColumn + 1;
    return this.checkItem(posX, posY);
  };
  private checkDownAndToLeft = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn - 1;
    return this.checkItem(posX, posY);
  };
  private checkDown = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn;
    return this.checkItem(posX, posY);
  };
  private checkDownAndToRight = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn + 1;
    return this.checkItem(posX, posY);
  };

  private addToStoredNumbers = (n: number | undefined) => {
    if (n) {
      this.storedNumbers.push(n);
    }
  };

  // Shout out to https://www.reddit.com/r/adventofcode/comments/18stssw/aoc_2023_day_3_late_starter_could_use_some_help/
  // for inspiration!
  private validateAndAddToStoredNumbers = (
    n1: number | undefined,
    n2: number | undefined,
    n3: number | undefined
  ) => {
    if (n1 === n2 && n2 === n3) {
      this.addToStoredNumbers(n1);
    } else if (n1 === n2) {
      this.addToStoredNumbers(n1);
      this.addToStoredNumbers(n3);
    } else if (n1 === n3) {
      this.addToStoredNumbers(n1);
      this.addToStoredNumbers(n2);
    } else if (n2 === n3) {
      this.addToStoredNumbers(n1);
      this.addToStoredNumbers(n2);
    } else {
      this.addToStoredNumbers(n1);
      this.addToStoredNumbers(n2);
      this.addToStoredNumbers(n3);
    }
  };

  private checkAboveSpaces = () => {
    const upAndToTheLeft = this.checkUpAndToLeft();
    const up = this.checkUp();
    const upAndToTheRight = this.checkUpAndToRight();
    this.validateAndAddToStoredNumbers(upAndToTheLeft, up, upAndToTheRight);
  };

  private checkSideSpaces = () => {
    const left = this.checkLeft();
    const right = this.checkRight();

    this.addToStoredNumbers(left);
    this.addToStoredNumbers(right);
  };

  private checkBelowSpaces = () => {
    const downAndToTheLeft = this.checkDownAndToLeft();
    const down = this.checkDown();
    const downAndToTheRight = this.checkDownAndToRight();
    this.validateAndAddToStoredNumbers(
      downAndToTheLeft,
      down,
      downAndToTheRight
    );
  };

  private checkSpaces = () => {
    this.checkAboveSpaces();
    this.checkSideSpaces();
    this.checkBelowSpaces();
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
      this.checkSpaces();
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

  public getSumOfStoredNumbers = () => {
    return this.storedNumbers.reduce((a, b) => a + b, 0);
  };
}

export const partOneHandler = (data: string): number => {
  const stringArray = convertMultiLineStringToArray(data);
  const engineSchematic = new EngineSchematic(stringArray);

  while (!engineSchematic.endOfSchematic) {
    engineSchematic.nextItem();
  }

  return engineSchematic.getSumOfStoredNumbers();
};
