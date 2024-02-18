import { useState, useMemo, createContext, PropsWithChildren } from "react";
import { GameStep } from "@enums/gameStep";

interface GameContextValue {
  numberOfPlayers: number | null;
  winnerPlayer: number | null;
  gameStep: GameStep;
  setNumberOfPlayers: (newNumberOfPlayers: number) => void;
}

const defaultValue: GameContextValue = {
  numberOfPlayers: null,
  winnerPlayer: null,
  gameStep: GameStep.NUMBER_OF_PLAYERS,
  setNumberOfPlayers: () => {},
};

export const GameContext = createContext(defaultValue);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [numberOfPlayers, setNumberOfPlayersState] =
    useState<GameContextValue["numberOfPlayers"]>(null);

  const setNumberOfPlayers = (newNumberOfPlayers: number) => {
    if (Number.isInteger(newNumberOfPlayers)) {
      throw new Error("The new number of players must be an integer");
    }

    if (newNumberOfPlayers <= 0) {
      throw new Error(
        "The new number of players cannot be equal or less than zero"
      );
    }

    setNumberOfPlayersState(newNumberOfPlayers);
  };

  const gameStep = useMemo<GameStep>(() => {
    if (!numberOfPlayers) {
      return GameStep.NUMBER_OF_PLAYERS;
    }

    return GameStep.CARD_BOARD_GAME;
  }, [numberOfPlayers]);

  const winnerPlayer = null;

  return (
    <GameContext.Provider
      value={{ numberOfPlayers, gameStep, winnerPlayer, setNumberOfPlayers }}
    >
      {children}
    </GameContext.Provider>
  );
};
