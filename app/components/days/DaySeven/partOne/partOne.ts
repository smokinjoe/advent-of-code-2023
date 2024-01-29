import { PlayerHands } from "./PlayerHands";

export const partOneHandler = (data: string) => {
  const playerHands = new PlayerHands(data);
  return playerHands.getBidValues();
};
