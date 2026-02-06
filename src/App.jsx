import { StartScreen } from "./StartScreen";
import { GameScreen } from "./GameScreen";
import { useGame } from "./GameContext";
export default function App() {
  const { isStartGame } = useGame();
  return (
    <section>
      <h1>Whack a Mole</h1>
      {isStartGame ? <GameScreen /> : <StartScreen />}
    </section>
  );
}
