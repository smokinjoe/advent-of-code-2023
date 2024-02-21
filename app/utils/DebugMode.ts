export class DebugMode {
  public iterationCount: number = 0;
  constructor(public debug: boolean, public maxIterationCount: number) {}

  public maxIterationCheck(count: number) {
    if (this.debug) {
      return count < this.maxIterationCount;
    }
    return true;
  }

  public log(_message: string, additional?: unknown) {
    if (this.debug) {
      const message = `JOE: ${_message}`;
      if (additional) {
        console.log(message, additional);
        return;
      }
      console.log(message);
    }
  }

  public init() {
    if (this.debug) {
      window.console.clear();
    }
  }

  public resetIterationCount() {
    this.iterationCount = 0;
  }

  public printHistory(arrayArray: number[][], title?: string) {
    if (!this.debug) {
      return;
    }

    const message = title ? `JOE: ${title}` : "JOE: ";
    console.group(message);
    for (let i = 0; i < arrayArray.length; i++) {
      const prefix = new Array(i).fill(" ").join("");
      const array = arrayArray[i];
      const arrayString = array.join(" ");
      console.log(`${prefix}${arrayString}`);
    }
    console.groupEnd();
  }
}
