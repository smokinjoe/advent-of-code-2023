import { assertIsDefined } from "~/utils/asserts";

import { Map } from "./Map";
import { Steps } from "./Steps";
import { Directions } from "./types";

class PartOne {
  public map: Map;
  public steps: Steps;
  public numSteps: number = 0;
  public breakPoint: number;

  constructor(data: string, breakPoint: number = 15000) {
    const dataArray = data.replace(/ /g, "").split("\n");

    const directions = dataArray.shift();
    assertIsDefined<string>(directions);
    this.steps = new Steps(directions);

    dataArray.shift(); // Remove the empty entry
    this.map = new Map(dataArray);

    this.breakPoint = breakPoint;
  }

  public startTravel() {
    while (!this.map.travelHasEnded) {
      this.numSteps++;

      const nextDirection = this.steps.nextDirection;
      const directionKey = Directions[nextDirection];

      if (this.numSteps > this.breakPoint) {
        throw new Error(`Exceeded ${this.breakPoint} steps`);
      }

      this.map.takeStep(directionKey);
    }
  }

  get stepsTaken() {
    return this.numSteps;
  }
}

export const partOneHandler = (data: string) => {
  const partOne = new PartOne(data);
  //   console.log("JOE: partOne: ", partOne);

  partOne.startTravel();

  return partOne.stepsTaken;
};
