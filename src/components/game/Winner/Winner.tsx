import { Typography } from "@components/ui";
import { useGame } from "@hooks/game";

const Winner = () => {
  const { winnerPlayer } = useGame();

  return (
    <Typography>The winner is player {winnerPlayer}. Congrats 🎉.</Typography>
  );
};

export default Winner;
