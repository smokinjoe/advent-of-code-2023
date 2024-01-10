import { Garden, delimiterToMap } from "./Garden";

export class AdvancedGarden extends Garden {
  //   private seedSeeds = () => {
  //     const { seeds } = this;
  //     const newSeedsResult = [];

  //     while (seeds.length > 0) {
  //       const start = seeds.shift();
  //       const numValues = seeds.shift();

  //       if (start === undefined || numValues === undefined) {
  //         break;
  //       }

  //       for (let i = start; i < start + numValues; i++) {
  //         newSeedsResult.push(i);
  //       }
  //     }

  //     this.seeds = newSeedsResult;
  //   };

  constructor(data: string) {
    super(data);
    // this.seedSeeds();
  }

  public get lowestLocation() {
    let lowestLocationLength = Infinity;

    // let skipToEnd = false;

    while (this.seeds.length > 0) {
      const seedStart = this.seeds.shift();
      const seedsLength = this.seeds.shift();

      if (seedStart === undefined || seedsLength === undefined) {
        break;
      }

      //   console.log("JOE: new seed time ========================");

      for (let i = seedStart; i < seedStart + seedsLength; i++) {
        let currentValue = i;

        // console.log("JOE: currentValue: ", currentValue);

        Object.values(delimiterToMap).forEach((map) => {
          let isValueUpdated = false;
          this[map].forEach((mapObject) => {
            if (isValueUpdated) {
              return;
            }

            const sourceStart = mapObject.source;
            const sourceEnd = mapObject.source + mapObject.length - 1;
            const difference = currentValue - sourceStart;

            if (sourceStart <= currentValue && currentValue <= sourceEnd) {
              isValueUpdated = true;
              currentValue = mapObject.destination + difference;
            }
          });

          //   if (!skipToEnd) {
          //     skipToEnd = confirm("Skip to the end?");
          //   }
        });

        // console.log("JOE: lowestLocationLength: ", lowestLocationLength);
        lowestLocationLength =
          lowestLocationLength > currentValue
            ? currentValue
            : lowestLocationLength;
      }
    }

    return lowestLocationLength;
  }
}
