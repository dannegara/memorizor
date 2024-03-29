import Layout from "@components/layout";
import Game from "@components/game";
import { GameProvider } from "@store/game";

const App = () => {
  return (
    <GameProvider>
      <Layout>
        <Game />
      </Layout>
    </GameProvider>
  );
};

export default App;
