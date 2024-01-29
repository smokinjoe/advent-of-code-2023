import { convertMultiLineStringToArray } from "~/utils/string";

/**
 * Function to parse a string and extract numbers to form a two digit number
 * If there is only one digit, then it will be the first and second digit
 * @param {string} data - The string to parse
 * @return {number}
 */
const extractNumberFromString = (data: string): number => {
  const stringArray = data.split("");
  const numbersArray: string[] = [];
  stringArray.forEach((char: string) => {
    if (!isNaN(parseInt(char))) {
      numbersArray.push(char);
    }
  });

  const firstDigit = parseInt(numbersArray[0]);
  let secondDigit = parseInt(numbersArray[numbersArray.length - 1]);
  if (isNaN(secondDigit)) {
    secondDigit = firstDigit;
  }
  return firstDigit * 10 + secondDigit;
};

export const partOneHandler = (data: string) => {
  const stringArray = convertMultiLineStringToArray(data);
  const numbersArray = stringArray.map((string) =>
    extractNumberFromString(string)
  );
  let sumValue = 0;
  numbersArray.forEach((number) => {
    sumValue += number;
  });

  return sumValue;
};
