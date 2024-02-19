import { useSpring, a } from "@react-spring/web";
import coverImage from "@assets/card-cover.webp";
import styles from "./FlippableCard.module.css";

interface FlippableCardProps {
  frontImage?: string;
  flipped: boolean;
  onClick: () => void;
}

const FlippableCard = ({
  frontImage,
  flipped,
  onClick,
}: FlippableCardProps) => {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className={styles.card} onClick={onClick}>
      <a.div
        className={styles.cardSide}
        style={{
          backgroundImage: `url(${coverImage})`,
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <a.div
        className={styles.cardSide}
        style={{
          opacity,
          transform,
          backgroundImage: `url(${frontImage})`,
          rotateY: "180deg",
        }}
      />
    </div>
  );
};

export default FlippableCard;
