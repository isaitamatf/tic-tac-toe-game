import { PLAYER_O, PLAYER_X } from "../constants";
import { PlayerWonType } from "../types";

/**
 * @description Return number of player O victories
 * @param {Array} games
 * @returns {number}
 */
const victoriesPlayerO = (games: number[]): number => {
  return games.filter((game: number) => game === PLAYER_O).length;
};
/**
 * @description Return number of player X victories
 * @param {Array} games
 * @returns {number}
 */
const victoriesPlayerX = (games: number[]): number => {
  return games.filter((game: number) => game === PLAYER_X).length;
};
/**
 * @description Check is some player is the winner
 * @param {Array} games
 * @returns {PlayerWonType}
 */
const isPlayerWon = (games: number[]): PlayerWonType => {
  if (victoriesPlayerO(games) >= 5) {
    return "O";
  } else if (victoriesPlayerX(games) >= 5) {
    return "X";
  } else {
    return null;
  }
};

export { victoriesPlayerO, victoriesPlayerX, isPlayerWon };
