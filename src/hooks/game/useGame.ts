import { useContext } from "react";
import { GameContext } from "@store/game";

export const useGame = () => useContext(GameContext);
