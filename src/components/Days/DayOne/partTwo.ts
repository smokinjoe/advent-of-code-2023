import { convertMultiLineStringToArray } from "../../../utils/stringReader";

const StringToNumberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
} as const;

// This is a type that is an array of the keys of the StringToNumberMap
type StringToNumberMapKeys = keyof typeof StringToNumberMap;

const parseString = (data: string): number => {
  const charArray = data.split("");

  const numbersArray: number[] = [];

  charArray.forEach((char: string, index: number) => {
    if (!isNaN(parseInt(char))) {
      numbersArray.push(parseInt(char));
    }

    let numberWord = "";
    for (let i = index; i < charArray.length; i++) {
      if (!isNaN(parseInt(charArray[i]))) {
        break;
      }
      numberWord += charArray[i];

      if (StringToNumberMap[numberWord as StringToNumberMapKeys]) {
        numbersArray.push(
          StringToNumberMap[numberWord as StringToNumberMapKeys]
        );
        numberWord = "";
      }
    }
  });

  const firstDigit = numbersArray[0];
  const secondDigit = numbersArray[numbersArray.length - 1];

  return firstDigit * 10 + secondDigit;
};

export const partTwoHandler = (data: string): number => {
  const stringArray = convertMultiLineStringToArray(data);
  const numbersArray = stringArray.map((string) => parseString(string));
  let sumValue = 0;
  numbersArray.forEach((number) => {
    sumValue += number;
  });

  return sumValue;
};
