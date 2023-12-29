const MaxRed = 12;
const MaxGreen = 13;
const MaxBlue = 14;

type SingleSet = {
  red: number;
  green: number;
  blue: number;
};

class GameSet {
  public red: number = 0;
  public green: number = 0;
  public blue: number = 0;

  constructor({ red, green, blue }: SingleSet) {
    this.red = red ?? 0;
    this.green = green ?? 0;
    this.blue = blue ?? 0;
  }
}

export class GameRecord {
  public id: number = -1;
  public setHistory: Array<GameSet> = [];

  constructor(record: string) {
    const [id, sets] = record.split(":");
    this.id = parseInt(id.replace("Game ", "").trim());
    this.setHistory = sets.split(";").map((set) => {
      const singleSet: SingleSet = {
        red: 0,
        green: 0,
        blue: 0,
      };

      set.split(",").forEach((x) => {
        if (x.includes("red")) {
          singleSet.red = parseInt(x.replace("red", "").trim());
        }
        if (x.includes("green")) {
          singleSet.green = parseInt(x.replace("green", "").trim());
        }
        if (x.includes("blue")) {
          singleSet.blue = parseInt(x.replace("blue", "").trim());
        }
      });

      return new GameSet({ ...singleSet });
    });
  }

  isValidGameRecord = () => {
    let isValid = true;

    this.setHistory.forEach((set) => {
      if (set.red > MaxRed || set.green > MaxGreen || set.blue > MaxBlue) {
        isValid = false;
      }
    });

    return isValid;
  };

  getScore = () => {
    if (this.isValidGameRecord()) {
      return this.id;
    }

    return 0;
  };
}
