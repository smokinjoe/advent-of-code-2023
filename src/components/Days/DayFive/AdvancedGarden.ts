import { Garden, delimiterToMap } from "./Garden";

export class AdvancedGarden extends Garden {
  constructor(data: string) {
    super(data);
  }

  public get lowestLocation() {
    let lowestLocationLength = Infinity;

    while (this.seeds.length > 0) {
      const seedStart = this.seeds.shift();
      const seedsLength = this.seeds.shift();

      if (seedStart === undefined || seedsLength === undefined) {
        break;
      }

      for (let i = seedStart; i < seedStart + seedsLength; i++) {
        let currentValue = i;

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
        });

        lowestLocationLength =
          lowestLocationLength > currentValue
            ? currentValue
            : lowestLocationLength;
      }
    }

    return lowestLocationLength;
  }
}
