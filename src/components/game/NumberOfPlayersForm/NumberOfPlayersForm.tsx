import { FormEvent } from "react";
import { NumberInput, Button } from "@components/ui";
import { useGame } from "@hooks/game";

const NumberOfPlayersForm = () => {
  const { setNumberOfPlayers } = useGame();

  const submitNumberOfPlayers = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNumberOfPlayers(
      (event.target as unknown as { numberOfPlayers: { value: number } })
        .numberOfPlayers.value
    );
  };

  return (
    <form onSubmit={submitNumberOfPlayers}>
      <NumberInput name="numberOfPlayers" min={1} max={5} defaultValue={1} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NumberOfPlayersForm;
