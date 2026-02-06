import { useGame } from "./GameContext";
import { Moles } from "./Moles";
export function GameScreen() {
  const { score, toggleStart } = useGame();
  return (
    <section id="gameScreen">
      <section id="buttonAndScore">
        <button onClick={toggleStart}>Restart</button>
        <h2>Score: {score}</h2>
      </section>
      <section>
        <Moles />
      </section>
    </section>
  );
}
