import { GameStep } from "@enums/gameStep";

export interface GameContextValue {
  numberOfPlayers: number | null;
  winnerPlayer: number | null;
  gameStep: GameStep;
  setNumberOfPlayers: (newNumberOfPlayers: number) => void;
  resetGame: () => void;
  setWinnerPlayer: (playerNumber: number) => void;
}
