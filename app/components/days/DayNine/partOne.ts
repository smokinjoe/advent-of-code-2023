class DebugMode {
  constructor(public value: boolean, public maxIterationCount: number) {}

  public maxIterationCheck(count: number) {
    if (this.value) {
      return count < this.maxIterationCount;
    }
    return true;
  }

  public log(_message: string, additional?: unknown) {
    if (this.value) {
      const message = `JOE: ${_message}`;
      if (additional) {
        console.log(message, additional);
        return;
      }
      console.log(message);
    }
  }

  public init() {
    if (this.value) {
      window.console.clear();
    }
  }
}

let iterationCount = 1;

const debug = new DebugMode(true, 40);

class OasisHistory {
  input: number[] = [];
  differenceHistory: number[][] = [];

  private endOfHistoryGeneration(array: number[]) {
    const result = array.filter((number) => number !== 0);
    return result.length === 0;
  }

  private calculateDifferenceOfArray(array: number[]) {
    const differences = [];

    for (let i = 0; i < array.length - 1; i++) {
      differences.push(array[i + 1] - array[i]);
    }

    return differences;
  }

  private generateHistoryArray() {
    let latestArray = this.input;
    while (!this.endOfHistoryGeneration(latestArray)) {
      latestArray = this.calculateDifferenceOfArray([...latestArray]);
      this.differenceHistory.push(latestArray);
    }
  }

  private predictNextValues() {
    let isArrayOfZeroes = true;
    for (let i = this.differenceHistory.length - 1; i > -1; i--) {
      if (isArrayOfZeroes) {
        const currentArray = this.differenceHistory[i];
        currentArray.push(0);
        isArrayOfZeroes = false;
      } else {
        const currentArray = this.differenceHistory[i];
        const previousArray = this.differenceHistory[i + 1];

        const currentFinalElement = currentArray[currentArray.length - 1];
        const previousFinalElement = previousArray[previousArray.length - 1];

        currentArray.push(currentFinalElement + previousFinalElement);
      }
    }
  }

  private sumNextValues() {
    let sum = 0;
    this.differenceHistory.forEach((array) => {
      sum += array[array.length - 1];
    });
    return sum;
  }

  constructor(input: string) {
    this.input = input.split(" ").map(Number);
    this.differenceHistory.push(this.input);
  }

  public partOne() {
    this.generateHistoryArray();
    this.predictNextValues();
    return this.differenceHistory[0][this.differenceHistory[0].length - 1];
  }
}

class Collection {
  history: OasisHistory[] = [];

  constructor(input: string) {
    const history = input.split("\n");
    this.history = history.map((line) => new OasisHistory(line));
  }

  public partOne() {
    let sum = 0;
    this.history.forEach((history) => (sum += history.partOne()));
    return sum;
  }
}

export const partOneHandler = (data: string) => {
  debug.init();
  const collection = new Collection(data);
  const result = collection.partOne();
  return result;
};
