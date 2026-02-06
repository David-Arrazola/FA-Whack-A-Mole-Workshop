import { useGame } from "./GameContext";
export function Moles() {
  const { moleArr, whack } = useGame();
  return (
    <ul>
      {moleArr.map((currHole, i) => (
        <li key={i} onClick={currHole === "MOLE" ? whack : null}>
          {currHole === "MOLE" ? (
            <img src="./public/mole.png" />
          ) : (
            <img src="./public/hole.png" />
          )}
        </li>
      ))}
    </ul>
  );
}
