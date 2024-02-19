import { GameStep } from "@enums/gameStep";

export type PlayerCardsPair = [number, number];

export type PlayerCardsPairs = PlayerCardsPair[];

export type PlayersCardsPairs = PlayerCardsPairs[];

export interface GameContextValue {
  numberOfPlayers: number | null;
  winnerPlayer: number | null;
  gameStep: GameStep;
  playersCardsPairs: PlayersCardsPairs;
  setNumberOfPlayers: (newNumberOfPlayers: number) => void;
  resetGame: () => void;
  addPlayersNewPair: (playerNumber: number, pair: PlayerCardsPair) => void;
  setWinnerPlayer: (playerNumber: number) => void;
}
