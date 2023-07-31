import { PLAYER_O } from "../constants";
import { ResultType } from "../types";

/**
 * @description Return the player winner
 * @param {number} player
 * @returns {ResultType}
 */
const returnWinnerPlayer = (player: number): ResultType =>
  player === PLAYER_O ? "o" : "x";

/**
 * @description Check is the player is a winner
 * @param {Array} squares
 * @param {number} boardSize
 * @returns {string}
 */
const checkWinnerCombos = (
  squares: number[],
  boardSize: number
): ResultType => {
  /**
   * @description Transform the original array to 2 dimensional array
   * @param {number} index
   * @returns {Array}
   */
  const transformTo2D = (index: number): [number, number] => {
    const row: number = Math.floor(index / boardSize);
    const col: number = index % boardSize;
    return [row, col];
  };
  /**
   * @description Check is all the sequence have values or null
   * @param {(number | null)[]} sequence
   * @returns {boolean}
   */
  const checkSequence = (sequence: (number | null)[]): boolean => {
    const firstValue: number | null = sequence[0];
    return (
      firstValue !== null && sequence.every((value) => value === firstValue)
    );
  };
  // Check rows for a winner
  for (let i: number = 0; i < boardSize; i++) {
    const rowStart: number = i * boardSize;
    const rowEnd: number = rowStart + boardSize;
    if (checkSequence(squares.slice(rowStart, rowEnd))) {
      return returnWinnerPlayer(squares[rowStart]);
    }
  }
  // Check columns for a winner
  for (let j: number = 0; j < boardSize; j++) {
    const colValues: number[] = [];
    for (let i: number = 0; i < boardSize; i++) {
      const index: number = j + i * boardSize;
      colValues.push(squares[index]);
    }
    if (checkSequence(colValues)) {
      return returnWinnerPlayer(colValues[0]);
    }
  }
  // Check diagonal from top-left to bottom-right
  const diagonal1Values: number[] = [];
  for (let i: number = 0; i < boardSize; i++) {
    const [row, col] = transformTo2D(i * boardSize + i);
    diagonal1Values.push(squares[row * boardSize + col]);
  }
  if (checkSequence(diagonal1Values)) {
    return returnWinnerPlayer(diagonal1Values[0]);
  }
  // Check diagonal from top-right to bottom-left
  const diagonal2Values: number[] = [];
  for (let i: number = 0; i < boardSize; i++) {
    const [row, col] = transformTo2D(i * boardSize + (boardSize - 1 - i));
    diagonal2Values.push(squares[row * boardSize + col]);
  }
  if (checkSequence(diagonal2Values)) {
    return returnWinnerPlayer(diagonal2Values[0]);
  }
  // If we haven´t winner then we will return a draw result
  if (!squares.some((e) => e === null)) {
    return "draw";
  }
  return null;
};

export { checkWinnerCombos };
