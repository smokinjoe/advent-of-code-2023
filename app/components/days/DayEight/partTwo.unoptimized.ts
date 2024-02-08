import { assertIsDefined } from "~/utils/asserts";
import { Steps } from "./Steps";
import { Directions, MapEntry, MapEntryValue } from "./types";

class ActiveMap {
  public currentKey: string = "";
  public currentEntry: MapEntryValue = {
    left: "",
    right: "",
  };

  constructor({
    currentKey,
    currentEntry,
  }: {
    currentKey: string;
    currentEntry: MapEntryValue;
  }) {
    this.currentKey = currentKey;
    this.currentEntry = currentEntry;
  }
}

class MapStore {
  public entries: MapEntry = {};
  public activeMaps: ActiveMap[] = [];

  private atEnd: boolean = false;

  private checkWhetherAtEnd = () => {
    const completedMaps = this.activeMaps.filter((entry) => {
      //   console.log("JOE: entry.currentKey[2]: ", entry.currentKey[2]);
      return entry.currentKey[2] === "Z";
    });

    this.atEnd = completedMaps.length === this.activeMaps.length;
  };

  private takeStep(direction: "left" | "right", activeMap: ActiveMap) {
    // console.log(
    //   `JOE: direction: ${direction} from { left: ${activeMap.currentEntry.left}, right: ${activeMap.currentEntry.right} }`
    // );
    const newKey = activeMap.currentEntry[direction];
    activeMap.currentKey = newKey;
    activeMap.currentEntry = this.entries[newKey];

    // console.log(`JOE: traveled to key: ${newKey}`);

    // console.log(
    //   `JOE: to key: ${newKey} | { left: ${activeMap.currentEntry.left}, right: ${activeMap.currentEntry.right} }`
    // );
  }

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

      if (key[2] === "A") {
        const activeMap = new ActiveMap({
          currentKey: key,
          currentEntry: {
            left,
            right,
          },
        });

        this.activeMaps.push(activeMap);
      }

      return {
        ...previousValue,
        ...entry,
      };
    }, {});

    this.entries = entries;
  }

  public takeSteps(direction: "left" | "right") {
    // console.log(`JOE: ==== traveling ${direction} ==== `);
    this.activeMaps.forEach((activeMap) => {
      this.takeStep(direction, activeMap);
    });

    this.checkWhetherAtEnd();
  }

  get travelHasEnded() {
    return this.atEnd;
  }
}

class PartTwo {
  public mapStore: MapStore;
  public steps: Steps;
  public numSteps: number = 0;
  public breakPoint: number;

  constructor(data: string, breakPoint: number = -1) {
    const dataArray = data.replace(/ /g, "").split("\n");

    const directions = dataArray.shift();
    assertIsDefined<string>(directions);
    this.steps = new Steps(directions);

    dataArray.shift(); // Remove the empty entry

    this.mapStore = new MapStore(dataArray);

    this.breakPoint = breakPoint;
  }

  public startTravel() {
    while (!this.mapStore.travelHasEnded) {
      this.numSteps++;

      const nextDirection = this.steps.nextDirection;
      const directionKey = Directions[nextDirection];

      if (this.breakPoint > 0 && this.numSteps > this.breakPoint) {
        console.error("JOE: this.mapStore: ", this.mapStore);
        throw new Error(`Exceeded ${this.breakPoint} steps`);
      }

      this.mapStore.takeSteps(directionKey);
    }
  }

  get stepsTaken() {
    return this.numSteps;
  }
}

export const partTwoHandler = (data: string) => {
  const partTwo = new PartTwo(data);
  //   console.log("JOE: partTwo: ", partTwo);
  partTwo.startTravel();

  //   return partTwo.mapStore.activeMaps.length;

  return partTwo.stepsTaken;
};
