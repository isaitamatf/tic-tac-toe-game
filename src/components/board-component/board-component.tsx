import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";

import {
  SquareComponent,
  ModalComponent,
  TimerComponent,
  ButtonComponent,
} from "../../components";
import { THREE, PLAYER_O, PLAYER_X } from "../../constants";
import {
  checkWinnerCombos,
  victoriesPlayerO,
  victoriesPlayerX,
  isPlayerWon,
} from "../../utils";
import { ResultType, PlayerWonType } from "../../types";

export type BoardComponentProps = {
  boardSize: number;
  gamesHistory: number[];
  setGameHistory: React.Dispatch<React.SetStateAction<number[]>>;
  newGame: () => void;
};

/**
 * @description Board component
 * @param {number} boardSize
 * @param {Array} gamesHistory
 * @param {Function} setGameHistory
 * @param {Function} newGame
 * @returns {JSX}
 */
const BoardComponent: React.FC<BoardComponentProps> = ({
  boardSize,
  gamesHistory,
  setGameHistory,
  newGame,
}) => {
  // Structure and value for each position on the board
  const [squares, setSquares] = useState<number[]>(
    Array(boardSize * boardSize).fill(null)
  );
  // Turns of the players (0 = "O" and 1 = "X")
  const [playerTurn, setPlayerTurn] = useState<number>(PLAYER_O);
  // Result of each game for show the modal with a message
  const [finishedGame, setFinishedGame] = useState<ResultType>(null);
  // Time for each game
  const [gameTime, setGameTime] = useState<number>(0);
  // Start or pause the game time
  const [gameTimeIsRunning, setGameTimeIsRunning] = useState<boolean>(false);
  // When we load for the first time then we will start the game time
  useEffect(() => {
    setGameTimeIsRunning(true);
  }, []);
  // When the match is over or some player won the game then we will stop the game timer
  useEffect(() => {
    if (finishedGame || isPlayerWon(gamesHistory)) {
      setGameTimeIsRunning(false);
    }
  }, [finishedGame, gamesHistory]);
  /**
   * @description Reset all the hooks to start a new game
   */
  const resetGame = () => {
    setSquares(Array(boardSize * boardSize).fill(null));
    setPlayerTurn(PLAYER_O);
    setFinishedGame(null);
    setGameTime(0);
    setGameTimeIsRunning(true);
  };
  /**
   * @description Set the player selection from the board
   * @param {number} positionSquare
   */
  const onClickSquare = (positionSquare: number) => {
    const nextSquares: number[] = squares.slice();
    nextSquares[positionSquare] = playerTurn;
    const winnerResult: ResultType = checkWinnerCombos(nextSquares, boardSize);
    if (winnerResult && !finishedGame) {
      setGameHistory([...gamesHistory, playerTurn]);
      setFinishedGame(winnerResult);
    }
    setSquares(nextSquares);
    setPlayerTurn(playerTurn === PLAYER_O ? PLAYER_X : PLAYER_O);
  };
  /**
   * @description Show the board depend on the board size selection
   * @returns {JSX}
   */
  const showBoard = () => {
    return Array.from(Array(boardSize * boardSize).keys()).map(
      (index: number) => (
        <SquareComponent
          key={`${boardSize}-${index}`}
          onClick={() => onClickSquare(index)}
          value={squares[index]}
        />
      )
    );
  };
  /**
   * @description Show the modal when the game is finished
   * @returns {JSX}
   */
  const showModal = () => {
    const playerWon: PlayerWonType = isPlayerWon(gamesHistory);
    if (playerWon) {
      return (
        <ModalComponent>
          <div className="ttt-modal-info">
            <span>
              The player {playerWon} is the winner of the Tic Tac Toe Game.
            </span>
            <span>Do you want to start a new game?</span>
          </div>
          <div className="ttt-modal-actions">
            <ButtonComponent
              text="New Game"
              onClick={() => {
                resetGame();
                newGame();
              }}
            />
          </div>
        </ModalComponent>
      );
    } else if (finishedGame) {
      let message: string = `The player ${
        finishedGame === "o" ? "O" : "X"
      } is the winner.`;
      if (finishedGame === "draw") {
        message = "The game was a draw.";
      }
      return (
        <ModalComponent>
          <div className="ttt-modal-info">
            <span>{message}</span>
          </div>
          <div className="ttt-modal-actions">
            <ButtonComponent text="New Round" onClick={() => resetGame()} />
          </div>
        </ModalComponent>
      );
    }
  };
  return (
    <>
      <div className="ttt-board" data-testid="ttt-board">
        <div className="ttt-row player-o">
          <div className="ttt-card">
            <label>Player</label>
            <FontAwesomeIcon icon={faO} color="#fea151" />
            <span>{victoriesPlayerO(gamesHistory)}</span>
          </div>
        </div>
        <div className={`ttt-row ttt-board-by-${boardSize}`}>{showBoard()}</div>
        <div className="ttt-row player-x">
          <div className="ttt-card">
            <label>Player</label>
            <FontAwesomeIcon icon={faX} color="#fea151" />
            <span>{victoriesPlayerX(gamesHistory)}</span>
          </div>
        </div>
        <div className="ttt-row">
          <TimerComponent
            time={gameTime}
            setTime={setGameTime}
            timeIsRunning={gameTimeIsRunning}
          />
        </div>
      </div>
      {showModal()}
    </>
  );
};

BoardComponent.propTypes = {
  boardSize: PropTypes.number.isRequired,
  gamesHistory: PropTypes.array.isRequired,
  setGameHistory: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
};

BoardComponent.defaultProps = {
  boardSize: THREE,
  gamesHistory: [],
  setGameHistory: () => {},
  newGame: () => {},
};

export { BoardComponent };
