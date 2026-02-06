import { createContext, useContext, useState } from "react";

// Context made
const gameContext = createContext();

// context provider
export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [isStartGame, setStartGame] = useState(false);
  const [moleArr, setMoleArr] = useState([]);
  const toggleStart = () => {
    setStartGame(!isStartGame);
    setMoleArr(randomMole());
    {
      !isStartGame ? setScore(0) : null;
    }
  };
  const whack = () => {
    setMoleArr(randomMole());
    setScore(score + 1);
  };
  const value = {
    score,
    isStartGame,
    moleArr,
    toggleStart,
    whack,
  };

  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
}

export function useGame() {
  const context = useContext(gameContext);

  if (!context) {
    throw Error("useGame must be within a GameContext");
  }
  return context;
}

function randomMole() {
  const moles = Array(9).fill("hole");

  const ranIndex = Math.floor(Math.random() * moles.length);
  moles[ranIndex] = "MOLE";
  return moles;
}
