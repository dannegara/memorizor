import NumberOfPlayersForm from "@components/game/NumberOfPlayersForm";
import Winner from "@components/game/Winner";
import CardBoard from "@components/game/CardBoard";
import { GameStep } from "@enums/gameStep";
import { useGame } from "@hooks/game";

const Game = () => {
  const { gameStep } = useGame();

  if (gameStep === GameStep.NUMBER_OF_PLAYERS) {
    return <NumberOfPlayersForm />;
  }

  if (gameStep === GameStep.CARD_BOARD_GAME) {
    return <CardBoard />;
  }

  if (gameStep === GameStep.WINNER) {
    return <Winner />;
  }

  throw new Error("Unexisting game step was set");
};

export default Game;
