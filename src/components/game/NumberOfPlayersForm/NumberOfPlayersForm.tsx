import { FormEvent } from "react";
import { NumberInput, Button, Typography } from "@components/ui";
import { useGame } from "@hooks/game";
import styles from "./NumberOfPlayersForm.module.css";

const NumberOfPlayersForm = () => {
  const { setNumberOfPlayers } = useGame();

  const submitNumberOfPlayers = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNumberOfPlayers(
      parseInt(
        (event.target as unknown as { numberOfPlayers: { value: string } })
          .numberOfPlayers.value
      )
    );
  };

  return (
    <div className={styles.NumberOfPlayersFormContainer}>
      <Typography>Please insert the desired number of players</Typography>
      <form
        className={styles.NumberOfPlayersForm}
        onSubmit={submitNumberOfPlayers}
      >
        <NumberInput name="numberOfPlayers" min={1} max={3} defaultValue={1} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default NumberOfPlayersForm;
