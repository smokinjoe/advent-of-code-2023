import { MapEntry, MapEntryValue } from "./types";

export class Map {
  public entries: MapEntry = {};
  public currentEntry: MapEntryValue = {
    left: "",
    right: "",
  };

  private atEnd: boolean = false;

  private checkWhetherAtEnd = (key: string) => {
    // const currentKey = Object.keys(this.currentEntry)[0];
    this.atEnd = key === "ZZZ";
  };

  constructor(data: string[]) {
    const entries: MapEntry = data.reduce(
      (previousValue, currentValue, currentIndex) => {
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

        if (currentIndex === 0) {
          // Set starting point
          this.currentEntry = { left, right };
        }

        return {
          ...previousValue,
          ...entry,
        };
      },
      {}
    );

    this.entries = entries;
  }

  public takeStep(direction: "left" | "right") {
    const newKey = this.currentEntry[direction];
    this.currentEntry = this.entries[newKey];
    this.checkWhetherAtEnd(newKey);
  }

  get travelHasEnded() {
    return this.atEnd;
  }
}
