import { Typography, Button } from "@components/ui";
import { useGame } from "@hooks/game";
import styles from "./Winner.module.css";

const Winner = () => {
  const { winnerPlayer, resetGame } = useGame();

  return (
    <div className={styles.WinnerInfoContainer}>
      <Typography>The winner is player {winnerPlayer}. Congrats 🎉.</Typography>
      <Button onClick={resetGame}>Play Again</Button>
    </div>
  );
};

export default Winner;
