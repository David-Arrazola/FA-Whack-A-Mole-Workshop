import { useGame } from "./GameContext";
export function Moles() {
  const { increaseScore } = useGame();
  return <ul>{randomMole(increaseScore)}</ul>;
}

function randomMole(increase) {
  const NUM_HOLES = 9;
  let moleArr = Array(9).fill("hole"); //todo MAKE THIS A FIELD IN THE CONTEXT
  moleArr = moleArr.map((currHole, i) => <button key={i}>{currHole}</button>);
  const ranIndex = Math.floor(Math.random() * NUM_HOLES);
  moleArr[ranIndex] = <button onClick={increase}>MOLE</button>;
  return moleArr;
}
