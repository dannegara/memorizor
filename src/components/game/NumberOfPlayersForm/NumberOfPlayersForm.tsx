import { FormEvent } from "react";
import { NumberInput, Button, Typography } from "@components/ui";
import { useGame } from "@hooks/game";

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
    <form onSubmit={submitNumberOfPlayers}>
      <Typography>Please insert the desired number of players</Typography>
      <NumberInput name="numberOfPlayers" min={1} max={5} defaultValue={1} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NumberOfPlayersForm;
