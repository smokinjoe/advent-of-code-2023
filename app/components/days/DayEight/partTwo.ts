import { Walker } from "./Walker";

export const partTwoHandler = (data: string) => {
  const walker = new Walker(data);
  const solution = walker.lcmSolution();

  return solution;
};
