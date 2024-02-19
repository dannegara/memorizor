import { Typography, Button } from "@components/ui";
import { useGame } from "@hooks/game";

const Winner = () => {
  const { winnerPlayer, resetGame } = useGame();

  return (
    <>
      <Typography>The winner is player {winnerPlayer}. Congrats 🎉.</Typography>
      <Button onClick={resetGame}>Play Again</Button>
    </>
  );
};

export default Winner;
