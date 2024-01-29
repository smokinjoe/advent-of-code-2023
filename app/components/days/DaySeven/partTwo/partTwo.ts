import { PlayerHands } from "./PlayerHands";

export const partTwoHandler = (data: string) => {
  const playerHands = new PlayerHands(data);
  return playerHands.getBidValues();
};
