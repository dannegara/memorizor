import NumberOfPlayersForm from "@components/game/NumberOfPlayersForm";
import Winner from "@components/game/Winner";
import CardBoard from "@components/game/CardBoard";
import { GameStep } from "@enums/gameStep";
import { useGame } from "@hooks/game";

const Game = () => {
  const { gameStep } = useGame();

  switch (gameStep) {
    case GameStep.NUMBER_OF_PLAYERS:
      return <NumberOfPlayersForm />;
    case GameStep.CARD_BOARD_GAME:
      return <CardBoard />;
    case GameStep.WINNER:
      return <Winner />;
    default:
      throw new Error("Unexisting game step was set");
  }
};

export default Game;
