import { convertMultiLineStringToArray } from "../../../utils/stringReader";

/*
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
*/

const isNumber = (value: string): boolean => !isNaN(Number(value));
const isSymbol = (value: string): boolean =>
  value.match(/^[@#$%&*-+=//]*$/) ? true : false;

class EngineSchematic {
  public rows: string[][] = [[]];
  public storedNumbers: number[] = [];
  public currentRow: number = 0;
  public currentColumn: number = 0;
  public endOfSchematic: boolean = true;

  // TODO: This is removing valid values
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
    this.storedNumbers.push(number);
  };

  private checkItem = (posX: number, posY: number) => {
    const row = this.rows[posY];
    if (row) {
      const itemAbove = row[posX];
      if (isNumber(itemAbove)) {
        this.parsePosition(posX, posY);
      }
    }
  };

  private checkUpAndToLeft = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn - 1;
    this.checkItem(posX, posY);
  };
  private checkUp = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn;
    this.checkItem(posX, posY);
  };
  private checkUpAndToRight = () => {
    const posY = this.currentRow - 1;
    const posX = this.currentColumn + 1;
    this.checkItem(posX, posY);
  };
  private checkLeft = () => {
    const posY = this.currentRow;
    const posX = this.currentColumn - 1;
    this.checkItem(posX, posY);
  };
  private checkRight = () => {
    const posY = this.currentRow;
    const posX = this.currentColumn + 1;
    this.checkItem(posX, posY);
  };
  private checkDownAndToLeft = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn - 1;
    this.checkItem(posX, posY);
  };
  private checkDown = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn;
    this.checkItem(posX, posY);
  };
  private checkDownAndToRight = () => {
    const posY = this.currentRow + 1;
    const posX = this.currentColumn + 1;
    this.checkItem(posX, posY);
  };

  private checkSpaces = () => {
    this.checkUpAndToLeft();
    this.checkUp();
    this.checkUpAndToRight();
    this.checkLeft();
    this.checkRight();
    this.checkDownAndToLeft();
    this.checkDown();
    this.checkDownAndToRight();
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

    if (isSymbol(currentColumn)) {
      this.checkSpaces();
    }

    if (this.currentRow === this.rows.length - 1) {
      this.currentRow = 0;
      this.currentColumn++;
    } else {
      this.currentRow++;
    }

    this.deDupeStoredNumbers();

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
