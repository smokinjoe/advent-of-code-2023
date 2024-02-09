export const Directions = {
  R: "right",
  L: "left",
} as const;

export type Direction = keyof typeof Directions;

export type MapEntry = Record<
  string,
  {
    left: string;
    right: string;
  }
>;

export type MapEntryValue = {
  left: string;
  right: string;
};
