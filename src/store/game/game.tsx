import { useState, useMemo, createContext, PropsWithChildren } from "react";
import { GameStep } from "@enums/gameStep";
import { GameContextValue } from "./types";

const defaultValue: GameContextValue = {
  numberOfPlayers: null,
  winnerPlayer: null,
  gameStep: GameStep.NUMBER_OF_PLAYERS,
  setNumberOfPlayers: () => {},
  resetGame: () => {},
  setWinnerPlayer: () => {},
};

export const GameContext = createContext(defaultValue);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [numberOfPlayers, setNumberOfPlayersState] = useState<
    GameContextValue["numberOfPlayers"]
  >(defaultValue.numberOfPlayers);
  const [winnerPlayer, setWinnerPlayerState] = useState<
    GameContextValue["winnerPlayer"]
  >(defaultValue.winnerPlayer);

  const gameStep = useMemo<GameStep>(() => {
    if (numberOfPlayers === null) {
      return GameStep.NUMBER_OF_PLAYERS;
    }

    if (winnerPlayer !== null) {
      return GameStep.WINNER;
    }

    return GameStep.CARD_BOARD_GAME;
  }, [numberOfPlayers, winnerPlayer]);

  const setNumberOfPlayers = (newNumberOfPlayers: number) => {
    if (!Number.isInteger(newNumberOfPlayers)) {
      throw new Error("The new number of players must be an integer");
    }

    if (newNumberOfPlayers <= 0) {
      throw new Error(
        "The new number of players cannot be equal or less than zero"
      );
    }

    setNumberOfPlayersState(newNumberOfPlayers);
  };

  const setWinnerPlayer = (playerNumber: number) => {
    if (!numberOfPlayers) {
      throw new Error(
        "You cannot set winner player before setting the number of players"
      );
    }

    if (playerNumber <= 0 || playerNumber > numberOfPlayers) {
      throw new Error(
        "The winner number cannot be less than zero or greater than number of players"
      );
    }

    setWinnerPlayerState(playerNumber);
  };

  const resetGame = () => {
    setNumberOfPlayersState(null);
    setWinnerPlayerState(null);
  };

  return (
    <GameContext.Provider
      value={{
        numberOfPlayers,
        gameStep,
        winnerPlayer,
        resetGame,
        setNumberOfPlayers,
        setWinnerPlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
