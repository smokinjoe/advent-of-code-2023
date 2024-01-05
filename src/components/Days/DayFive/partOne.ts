import { convertMultiLineStringToArray } from "../../../utils/stringReader";

const Delimiters = {
  SeedToSoil: "seed-to-soil map:",
  SoilToFertilizer: "soil-to-fertilizer map:",
  FertilizerToWater: "fertilizer-to-water map:",
  WaterToLight: "water-to-light map:",
  LightToTemperature: "light-to-temperature map:",
  TemperatureToHumidity: "temperature-to-humidity map:",
  HumidityToLocation: "humidity-to-location map:",
} as const;

const delimiterToMap = {
  [Delimiters.SeedToSoil]: "seedToSoilMap",
  [Delimiters.SoilToFertilizer]: "soilToFertilizerMap",
  [Delimiters.FertilizerToWater]: "fertilizerToWaterMap",
  [Delimiters.WaterToLight]: "waterToLightMap",
  [Delimiters.LightToTemperature]: "lightToTemperatureMap",
  [Delimiters.TemperatureToHumidity]: "temperatureToHumidityMap",
  [Delimiters.HumidityToLocation]: "humidityToLocationMap",
} as const;

type MapObject = {
  source: number;
  destination: number;
  length: number;
};

class Garden {
  public seeds: number[] = [];

  //   private mapObject: MapObject = {
  //     source: -1,
  //     destination: -1,
  //     length: -1,
  //   };

  public seedToSoilMap: MapObject[] = [];
  public soilToFertilizerMap: MapObject[] = [];
  public fertilizerToWaterMap: MapObject[] = [];
  public waterToLightMap: MapObject[] = [];
  public lightToTemperatureMap: MapObject[] = [];
  public temperatureToHumidityMap: MapObject[] = [];
  public humidityToLocationMap: MapObject[] = [];

  private extractGardenMapData = (
    // TODO: There has to be a cleaner way to do this
    mapPhase: (typeof Delimiters)[keyof typeof Delimiters],
    dataArray: Array<string>
  ) => {
    const mapName = delimiterToMap[mapPhase];
    while (dataArray.length > 0) {
      if ((Object.values(Delimiters) as string[]).includes(dataArray[0])) {
        break;
      }
      const line = dataArray.shift();
      const [destinationString, sourceString, lengthString] =
        line?.split(" ") || [];

      const destination = parseInt(destinationString);
      const source = parseInt(sourceString);
      const length = parseInt(lengthString);

      this[mapName].push({ destination, source, length });
    }
  };

  //   private generateMappingValue = (map: MapObject, currentValue: number) => {
  //     // const { destination, source, length } = map;

  //     if (currentValue >= source)
  //       // if (currentValue >= source && currentValue <= source + length) {
  //       //   return destination + (currentValue - source);
  //       // }
  //       return currentValue;
  //   };

  constructor(data: string) {
    const dataArray = convertMultiLineStringToArray(data);

    // Extract seeds by popping off initial key/value and converting to number
    const seeds = dataArray.shift()?.replace("seeds: ", "").split(" ");
    this.seeds = seeds?.map((seed) => parseInt(seed)) || [];

    // Extract maps
    while (dataArray.length > 0) {
      const line = dataArray.shift();
      if (line === Delimiters.SeedToSoil) {
        this.extractGardenMapData(Delimiters.SeedToSoil, dataArray);
      } else if (line === Delimiters.SoilToFertilizer) {
        this.extractGardenMapData(Delimiters.SoilToFertilizer, dataArray);
      } else if (line === Delimiters.FertilizerToWater) {
        this.extractGardenMapData(Delimiters.FertilizerToWater, dataArray);
      } else if (line === Delimiters.WaterToLight) {
        this.extractGardenMapData(Delimiters.WaterToLight, dataArray);
      } else if (line === Delimiters.LightToTemperature) {
        this.extractGardenMapData(Delimiters.LightToTemperature, dataArray);
      } else if (line === Delimiters.TemperatureToHumidity) {
        this.extractGardenMapData(Delimiters.TemperatureToHumidity, dataArray);
      } else if (line === Delimiters.HumidityToLocation) {
        this.extractGardenMapData(Delimiters.HumidityToLocation, dataArray);
      }
    }
  }

  public get lowestLocation() {
    const locationLengths: number[] = [];
    this.seeds.forEach((seed) => {
      let currentValue = seed;
      Object.values(delimiterToMap).forEach((map) => {
        this[map].forEach((mapObject) => {
          const sourceStart = mapObject.source;
          const sourceEnd = mapObject.source + mapObject.length - 1;
          const difference = currentValue - sourceStart;
          if (sourceStart <= currentValue && currentValue <= sourceEnd) {
            console.log(
              "JOE: mapObject.destination + difference: ",
              mapObject.destination + difference
            );
          }
          currentValue =
            sourceStart <= currentValue && currentValue <= sourceEnd
              ? mapObject.destination + difference
              : currentValue;
        });
      });
      locationLengths.push(currentValue);
    });

    return Math.min(...locationLengths);
  }

  //   public get lowestLocation() {
  //     const locationLengths: number[] = [];

  //     this.seeds.forEach((seed) => {
  //       // Iterate through all maps starting from seed-to-soil and ending with humidity-to-location
  //       let currentValue = seed;
  //       Object.values(delimiterToMap).forEach((map) => {
  //         // currentValue = this.generateMappingValue(this[map], currentValue);
  //       });
  //       locationLengths.push(currentValue);
  //     });

  //     // and return the lowest location
  //     return Math.min(...locationLengths);
  //   }
}

export const partOneHandler = (data: string) => {
  const garden = new Garden(data);
  console.log("JOE: garden: ", garden);
  return garden.lowestLocation;
};
