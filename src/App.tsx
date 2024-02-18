import NumberOfPlayersForm from "@components/game/NumberOfPlayersForm";
import Winner from "@components/game/Winner";
import CardBoard from "@components/game/CardBoard";
import Layout from "@components/layout";
import { GameProvider } from "@store/game";

const App = () => {
  return (
    <GameProvider>
      <Layout>
        <NumberOfPlayersForm />
        <CardBoard />
        <Winner />
      </Layout>
    </GameProvider>
  );
};

export default App;
