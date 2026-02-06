import { useGame } from "./GameContext";
import { Moles } from "./Moles";
export function GameScreen() {
  const { score, toggleStart } = useGame();
  return (
    <section>
      <h2>GAME SCREEN</h2>
      <button onClick={toggleStart}>Restart</button>
      <h2>Score: {score}</h2>
      <section>
        <Moles />
      </section>
    </section>
  );
}
