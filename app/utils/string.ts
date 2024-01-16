export const convertMultiLineStringToArray = (
  stringData: string
): Array<string> => {
  return stringData.split("\n").filter((x: unknown) => Boolean(x));
};

export const isNumber = (value: string): boolean => !isNaN(Number(value));

// TODO: add more characters
export const isSymbol = (value: string): boolean =>
  value.match(/^[@#$%&*-+=//]*$/) ? true : false;

/**
 * Day Three specific checkers
 */
export const dayThree = {
  isEngineSymbol: (value: string): boolean => !isNumber(value) && value !== ".",
  isGear: (value: string): boolean => value === "*",
};
