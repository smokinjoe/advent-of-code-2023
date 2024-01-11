import { convertMultiLineStringToArray } from "../../../utils/stringReader";

export class Race {
  private timeLimit: number = 0;
  private distanceRecord: number = 0;
  private distancesTraveled: number[] = [];

  private determineDistanceTraveled(speed: number, timeRemaining: number) {
    const distanceTraveled = speed * timeRemaining;
    return distanceTraveled;
  }

  constructor(timeLimit: number, distanceRecord: number) {
    this.timeLimit = timeLimit;
    this.distanceRecord = distanceRecord;
  }

  get recordBreakers() {
    for (let speed = 0; speed <= this.timeLimit; speed++) {
      const distanceTraveled = this.determineDistanceTraveled(
        speed,
        this.timeLimit - speed
      );

      if (distanceTraveled > this.distanceRecord) {
        this.distancesTraveled.push(distanceTraveled);
      }
    }
    return this.distancesTraveled;
  }
}

export class RaceCollection {
  private races: Race[] = [];
  private timeLimits: number[] = [];
  private distanceRecords: number[] = [];

  constructor(input: string) {
    const raceData = convertMultiLineStringToArray(input);

    // extract Max Times
    const timeLimits = raceData[0]
      .split(/\s+/)
      .map((time) => parseInt(time, 10));
    timeLimits.shift();
    this.timeLimits = timeLimits;

    // extract distance records
    const distanceRecords = raceData[1]
      .split(/\s+/)
      .map((distance) => parseInt(distance, 10));
    distanceRecords.shift();
    this.distanceRecords = distanceRecords;

    for (let i = 0; i < timeLimits.length; i++) {
      this.races.push(new Race(timeLimits[i], distanceRecords[i]));
    }
  }

  get partOneAnswer() {
    const recordBreakers = this.races.map((race) => race.recordBreakers);
    const answer = recordBreakers.reduce((previous, current) => {
      return previous * current.length;
    }, 1);
    return answer;
  }

  get partTwoAnswer() {
    const timeLimit = parseInt(this.timeLimits.join(""), 10);
    const distanceRecord = parseInt(this.distanceRecords.join(""), 10);
    const race = new Race(timeLimit, distanceRecord);
    return race.recordBreakers.length;
  }
}
