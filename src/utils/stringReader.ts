export const convertMultiLineStringToArray = (
  stringData: string
): Array<string> => {
  return stringData.split("\n").filter((x: unknown) => Boolean(x));
};
