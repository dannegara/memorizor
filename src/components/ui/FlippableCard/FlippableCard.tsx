import { useState, JSX } from "react";
import styles from "./FlippableCard.module.css";

interface FlippableCardProps {
  frontContent: JSX.Element;
  backContent: JSX.Element;
}

const FlippableCard = ({ frontContent, backContent }: FlippableCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      role="button"
      className={[styles.flippableCard, isFlipped && styles.flipped]
        .filter(Boolean)
        .join(" ")}
      onClick={flipCard}
    >
      <div className={styles.cardFront}>{frontContent}</div>
      <div className={styles.cardBack}>{backContent}</div>
    </div>
  );
};

export default FlippableCard;
