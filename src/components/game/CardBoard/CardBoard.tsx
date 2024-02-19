import { useState, useMemo } from "react";
import { Spin } from "antd";
import { FlippableCard, Typography } from "@components/ui";
import { useCatsImages } from "@hooks/game";
import { doubleItemsInList, shuffleList } from "@utils/list";
import { useGame } from "@hooks/game";
import styles from "./CardBoard.module.css";

const CardBoard = () => {
  const { isLoading, catsImages } = useCatsImages();
  const { playersCardsPairs, addPlayersNewPair } = useGame();
  const [firstOpenedCard, setFirstOpenedCard] = useState<number | null>(null);
  const [secondOpenedCard, setSecondOpenedCard] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const doubledAndShuffledCatsImages = useMemo(
    () => shuffleList(doubleItemsInList(catsImages)),
    [catsImages]
  );

  const allOpenedCardsIndexes = useMemo(() => {
    return [...playersCardsPairs.flat(2), firstOpenedCard, secondOpenedCard];
  }, [playersCardsPairs, firstOpenedCard, secondOpenedCard]);

  const flipCard = (cardIndex: number) => {
    const bothCardsAreOpen =
      firstOpenedCard !== null && secondOpenedCard !== null;

    if (bothCardsAreOpen) {
      return;
    }

    if (firstOpenedCard === null) {
      setFirstOpenedCard(cardIndex);

      return;
    }

    if (secondOpenedCard === null) {
      const openedCardsAreTheSame =
        doubledAndShuffledCatsImages[firstOpenedCard] ===
        doubledAndShuffledCatsImages[cardIndex];

      if (openedCardsAreTheSame) {
        addPlayersNewPair(currentPlayer, [firstOpenedCard, cardIndex]);
      }

      setSecondOpenedCard(cardIndex);

      setTimeout(() => {
        setCurrentPlayer((prevCurrentPlayer) => prevCurrentPlayer + 1);
        setFirstOpenedCard(null);
        setSecondOpenedCard(null);
      }, 1000);

      return;
    }
  };

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <Typography>Now it's player number {currentPlayer} turn</Typography>
      <div className={styles.CardBoard}>
        {doubledAndShuffledCatsImages.map((catImage, index) => (
          <FlippableCard
            flipped={allOpenedCardsIndexes.includes(index)}
            key={`${catImage}${index}`}
            coverImage="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
            frontImage={catImage}
            onClick={() => flipCard(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CardBoard;
