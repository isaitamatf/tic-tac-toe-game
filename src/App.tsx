import React, { useState } from "react";

import {
  BoardSizeOptionsComponent,
  BoardComponent,
  StatsComponent,
} from "./components";
import { THREE } from "./constants";
import "./App.scss";

/**
 * @description App component
 * @returns {JSX}
 */
const App: React.FC = () => {
  // Set the size of the board (3, 6 or 9)
  const [boardSize, setBoardSize] = useState<number>(THREE);
  // Confirm when the board size is selected
  const [boardSizeSelected, setBoardSizeSelected] = useState<boolean>(false);
  // History of the all games
  const [gamesHistory, setGameHistory] = useState<number[]>([]);
  /**
   * @description Start a new game with the default values
   */
  const newGame = () => {
    setBoardSize(THREE);
    setBoardSizeSelected(false);
    setGameHistory([]);
  };
  return (
    <>
      <header className="ttt-header">
        <span>Tic Tac Toe Game</span>
      </header>
      <div className="ttt-container">
        {boardSizeSelected ? (
          <>
            <BoardComponent
              boardSize={boardSize}
              gamesHistory={gamesHistory}
              setGameHistory={setGameHistory}
              newGame={newGame}
            />
            <StatsComponent gamesHistory={gamesHistory} />
          </>
        ) : (
          <BoardSizeOptionsComponent
            boardSize={boardSize}
            setBoardSize={setBoardSize}
            setBoardSizeSelected={setBoardSizeSelected}
          />
        )}
      </div>
    </>
  );
};

export { App };
