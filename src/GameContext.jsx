import { createContext, useContext, useState } from "react";

// Context made
const gameContext = createContext();

// context provider
export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [isStartGame, setStartGame] = useState(false);
  const toggleStart = () => setStartGame(!isStartGame);
  const increaseScore = () => setScore(score + 1);
  const value = { score, isStartGame, toggleStart, increaseScore };

  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
}

export function useGame() {
  const context = useContext(gameContext);

  if (!context) {
    throw Error("useGame must be within a GameContext");
  }
  return context;
}
