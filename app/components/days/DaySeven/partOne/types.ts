export const Hands = {
  FiveOfAKind: "five-of-a-kind",
  FourOfAKind: "four-of-a-kind",
  FullHouse: "full-house",
  ThreeOfAKind: "three-of-a-kind",
  TwoPair: "two-pair",
  OnePair: "one-pair",
  HighCard: "high-card",
  Null: "null",
} as const;

export type Hand = (typeof Hands)[keyof typeof Hands];

export const HandStrength: Record<Hand, number> = {
  [Hands.FiveOfAKind]: 7,
  [Hands.FourOfAKind]: 6,
  [Hands.FullHouse]: 5,
  [Hands.ThreeOfAKind]: 4,
  [Hands.TwoPair]: 3,
  [Hands.OnePair]: 2,
  [Hands.HighCard]: 1,
  [Hands.Null]: 0,
} as const;

export const CardStrength = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
] as const;

export type Card = (typeof CardStrength)[number];
