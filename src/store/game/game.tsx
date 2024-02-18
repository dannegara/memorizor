import { useState, createContext, PropsWithChildren } from "react";

interface GameContextValue {
  numberOfPlayers: number;
  setNumberOfPlayers: (newNumberOfPlayers: number) => void;
}

const defaultValue: GameContextValue = {
  numberOfPlayers: 1,
  setNumberOfPlayers: () => {},
};

export const GameContext = createContext(defaultValue);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [numberOfPlayers, setNumberOfPlayersState] = useState(
    defaultValue.numberOfPlayers
  );

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

  return (
    <GameContext.Provider value={{ numberOfPlayers, setNumberOfPlayers }}>
      {children}
    </GameContext.Provider>
  );
};
