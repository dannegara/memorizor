import { useState, useMemo, createContext, PropsWithChildren } from "react";
import { produce } from "immer";
import { GameStep } from "@enums/gameStep";

type PlayerCardsPair = [number, number];

type PlayerCardsPairs = PlayerCardsPair[];

type PlayersCardsPairs = PlayerCardsPairs[];

interface GameContextValue {
  numberOfPlayers: number | null;
  winnerPlayer: number | null;
  gameStep: GameStep;
  playersCardsPairs: PlayersCardsPairs;
  setNumberOfPlayers: (newNumberOfPlayers: number) => void;
  resetGame: () => void;
  addPlayersNewPair: (playerNumber: number, pair: PlayerCardsPair) => void;
}

const defaultValue: GameContextValue = {
  numberOfPlayers: null,
  winnerPlayer: null,
  gameStep: GameStep.NUMBER_OF_PLAYERS,
  playersCardsPairs: [],
  setNumberOfPlayers: () => {},
  resetGame: () => {},
  addPlayersNewPair: () => {},
};

export const GameContext = createContext(defaultValue);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [numberOfPlayers, setNumberOfPlayersState] = useState<
    GameContextValue["numberOfPlayers"]
  >(defaultValue.numberOfPlayers);
  const [winnerPlayer, setWinnerPlayer] = useState<
    GameContextValue["winnerPlayer"]
  >(defaultValue.winnerPlayer);
  const [playersCardsPairs, setPlayersCardsPairs] = useState<
    GameContextValue["playersCardsPairs"]
  >(defaultValue.playersCardsPairs);

  const gameStep = useMemo<GameStep>(() => {
    if (!numberOfPlayers) {
      return GameStep.NUMBER_OF_PLAYERS;
    }

    if (winnerPlayer) {
      return GameStep.WINNER;
    }

    return GameStep.CARD_BOARD_GAME;
  }, [numberOfPlayers, winnerPlayer]);

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
    setPlayersCardsPairs(new Array(newNumberOfPlayers).fill([]));
  };

  const addPlayersNewPair = (playerNumber: number, pair: PlayerCardsPair) => {
    setPlayersCardsPairs(
      produce(playersCardsPairs, (draft) => {
        draft[playerNumber - 1].push(pair);
      })
    );
  };

  const resetGame = () => {
    setNumberOfPlayersState(null);
    setWinnerPlayer(null);
    setPlayersCardsPairs([]);
  };

  return (
    <GameContext.Provider
      value={{
        numberOfPlayers,
        gameStep,
        winnerPlayer,
        playersCardsPairs,
        resetGame,
        setNumberOfPlayers,
        addPlayersNewPair,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
