import { useGame } from "./GameContext";

export function StartScreen() {
  const { toggleStart, score } = useGame();
  return (
    <section>
      <section>
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points</p>
        <p>How many points can you get?</p>
        <button onClick={toggleStart}>Play</button>
      </section>
      <section>
        <h2>High Scores</h2>
        <p>{score === 0 ? "None yet...Play the game!" : score}</p>
      </section>
    </section>
  );
}
