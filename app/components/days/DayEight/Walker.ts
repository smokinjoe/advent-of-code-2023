import { assertIsDefined } from "~/utils/asserts";
import { Directions, MapEntry, MapEntryValue, Direction } from "./types";

// inspired by https://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
function leastCommonMultiple(numbers: number[]) {
  function gcd(a: number, b: number): number {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a: number, b: number) {
    return (a * b) / gcd(a, b);
  }

  return numbers.reduce((multiple, num) => lcm(multiple, num), 1);
}

class Steps {
  public directions: Direction[] = [];
  public index: number = 0;

  constructor(data: string) {
    const directions = data.split("");

    this.directions = directions.map((direction: string) => {
      return direction as Direction;
    });
  }

  get nextDirection(): Direction {
    const direction = this.directions[this.index];
    this.index = this.index === this.directions.length - 1 ? 0 : this.index + 1;

    return direction;
  }

  public reset() {
    this.index = 0;
  }
}

class Map {
  public entries: MapEntry = {};
  public currentEntry: MapEntryValue = {
    left: "",
    right: "",
  };

  private atEnd: boolean = false;

  private checkWhetherAtEnd = (key: string) => {
    this.atEnd = /Z$/.test(key);
  };

  constructor(data: string[]) {
    const entries: MapEntry = data.reduce((previousValue, currentValue) => {
      const [key, coordinates] = currentValue.split("=");

      const [left, right] = coordinates
        .replace("(", "")
        .replace(")", "")
        .split(",");

      const entry = {
        [key]: {
          left,
          right,
        },
      };

      return {
        ...previousValue,
        ...entry,
      };
    }, {});

    this.entries = entries;
  }

  public takeStep(direction: "left" | "right") {
    const newKey = this.currentEntry[direction];
    this.currentEntry = this.entries[newKey];
    this.checkWhetherAtEnd(newKey);
  }

  public setCurrentEntryValue(entryValue: MapEntryValue) {
    this.currentEntry = entryValue;
  }

  public AllKeysEndingIn(regex: RegExp) {
    return Object.keys(this.entries).filter((key) => regex.test(key));
  }

  public reset() {
    this.atEnd = false;
  }

  get travelHasEnded() {
    return this.atEnd;
  }
}

export class Walker {
  public map: Map;
  public steps: Steps;
  public numStepsArray: number[] = [];
  public breakPoint: number;

  private startTravel() {
    let numSteps = 0;

    while (!this.map.travelHasEnded) {
      numSteps++;

      const nextDirection = this.steps.nextDirection;
      const directionKey = Directions[nextDirection];

      if (this.breakPoint > 0 && numSteps > this.breakPoint) {
        throw new Error(`Exceeded ${this.breakPoint} steps`);
      }

      this.map.takeStep(directionKey);
    }

    return numSteps;
  }

  constructor(data: string, breakPoint: number = -1) {
    const dataArray = data.replace(/ /g, "").split("\n");

    const directions = dataArray.shift();
    assertIsDefined<string>(directions);
    this.steps = new Steps(directions);

    dataArray.shift(); // Remove the empty entry
    this.map = new Map(dataArray);

    this.breakPoint = breakPoint;
  }

  public lcmSolution() {
    const allKeysEndingInA = this.map.AllKeysEndingIn(/A$/);

    allKeysEndingInA.forEach((key) => {
      console.log("JOE: key: ", key);
      this.map.setCurrentEntryValue(this.map.entries[key]);
      this.steps.reset();
      this.map.reset();
      this.numStepsArray.push(this.startTravel());
    });

    const lcm = leastCommonMultiple(this.numStepsArray);

    return lcm;
  }
}
