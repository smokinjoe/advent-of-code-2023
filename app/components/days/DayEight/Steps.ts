import { Direction } from "./types";

export class Steps {
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
}
