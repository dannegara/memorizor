import { useState, useMemo } from "react";
import { notification } from "antd";
import { produce } from "immer";
import { FlippableCard, Typography, Loader } from "@components/ui";
import { useCatsImages } from "@hooks/game";
import { doubleItemsInList, shuffleList } from "@utils/list";
import { useGame } from "@hooks/game";
import styles from "./CardBoard.module.css";
import { PlayersCardsPairs, PlayerCardsPair } from "./types";

const CardBoard = () => {
  const { isLoading, catsImages } = useCatsImages();
  const [api, contextHolder] = notification.useNotification();
  const { numberOfPlayers, setWinnerPlayer } = useGame();
  const [firstOpenedCard, setFirstOpenedCard] = useState<number | null>(null);
  const [secondOpenedCard, setSecondOpenedCard] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playersCardsPairs, setPlayersCardsPairs] = useState<PlayersCardsPairs>(
    new Array(numberOfPlayers!).fill([])
  );

  const doubledAndShuffledCatsImages = useMemo(
    () => shuffleList(doubleItemsInList(catsImages)),
    [catsImages]
  );

  const allOpenedCardsIndexes = useMemo(() => {
    return [...playersCardsPairs.flat(2), firstOpenedCard, secondOpenedCard];
  }, [playersCardsPairs, firstOpenedCard, secondOpenedCard]);

  const addPlayersNewPair = (playerNumber: number, pair: PlayerCardsPair) => {
    setPlayersCardsPairs(
      produce(playersCardsPairs, (draft) => {
        draft[playerNumber - 1].push(pair);
      })
    );
  };

  const flipCard = (cardIndex: number) => {
    const bothCardsAreOpen =
      firstOpenedCard !== null && secondOpenedCard !== null;
    const sameCardClicked = cardIndex === firstOpenedCard;

    if (bothCardsAreOpen || sameCardClicked) {
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
        api.open({ message: "You've found a pair. Yay 🎉!" });

        addPlayersNewPair(currentPlayer, [firstOpenedCard, cardIndex]);
      }

      setSecondOpenedCard(cardIndex);

      setTimeout(() => {
        const allCardsHaveBeenOpened =
          allOpenedCardsIndexes.length >= doubledAndShuffledCatsImages.length;

        if (allCardsHaveBeenOpened) {
          const winnerPlayer = playersCardsPairs.reduce(
            (acc, playerCardsPairs, index) => {
              if (playerCardsPairs.length > playersCardsPairs[acc].length) {
                return index;
              }

              return acc;
            },
            0
          );

          setWinnerPlayer(winnerPlayer + 1);
        } else {
          setCurrentPlayer((prevCurrentPlayer) => {
            if (prevCurrentPlayer === numberOfPlayers) {
              return 1;
            }

            return prevCurrentPlayer + 1;
          });

          setFirstOpenedCard(null);
          setSecondOpenedCard(null);
        }
      }, 1000);

      return;
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.CardBoardContainer}>
      {contextHolder}
      <Typography>Now it's player number {currentPlayer} turn</Typography>
      <Typography>
        {playersCardsPairs.map((pairs, playerIndex) => (
          <>
            Player {playerIndex + 1} score: {pairs.length}.
            <br />
          </>
        ))}
      </Typography>
      <div className={styles.CardBoard}>
        {doubledAndShuffledCatsImages.map((catImage, index) => (
          <FlippableCard
            flipped={allOpenedCardsIndexes.includes(index)}
            key={`${catImage}${index}`}
            frontImage={catImage}
            onClick={() => flipCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardBoard;
