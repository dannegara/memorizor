import { useState, useMemo } from "react";
import { Spin } from "antd";
import { FlippableCard, Typography } from "@components/ui";
import { useCatsImages } from "@hooks/game";
import { copyItemsInList, shuffleList } from "@utils/list";
import styles from "./CardBoard.module.css";

const CardBoard = () => {
  const { isLoading, catsImages } = useCatsImages();
  const [firstOpenedCard, setFirstOpenedCard] = useState<number | null>(null);
  const [secondOpenedCard, setSecondOpenedCard] = useState<number | null>(null);

  const doubledAndShuffledCatsImages = useMemo(
    () => shuffleList(copyItemsInList(catsImages)),
    [catsImages]
  );

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
      setSecondOpenedCard(cardIndex);

      setTimeout(() => {
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
      <Typography>Now it's player number 1 turn</Typography>
      <div className={styles.CardBoard}>
        {doubledAndShuffledCatsImages.map((catImage, index) => (
          <FlippableCard
            flipped={firstOpenedCard === index || secondOpenedCard === index}
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
