import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";

import { PLAYER_O, PLAYER_X } from "../../constants";

export type GamesHistoryComponentProps = {
  gamesHistory: number[];
};

/**
 * @description Games history component
 * @param {Array} gamesHistory
 * @returns {JSX}
 */
const GamesHistoryComponent: React.FC<GamesHistoryComponentProps> = ({
  gamesHistory,
}) => {
  /**
   * @description Return the icon of the player
   * @param {number} gamePosition
   * @returns {JSX}
   */
  const showPlayerIcon = (gamePosition: number) => {
    const result: number = gamesHistory[gamePosition];
    return result === PLAYER_O || result === PLAYER_X ? (
      <FontAwesomeIcon
        icon={result === PLAYER_O ? faO : faX}
        color={result === PLAYER_O ? "#fea151" : "#363b3d"}
      />
    ) : (
      <></>
    );
  };
  return (
    <div className="ttt-games-history" data-testid="ttt-games-history">
      <div className="ttt-games-history-game">{showPlayerIcon(0)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(1)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(2)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(3)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(4)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(5)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(6)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(7)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(8)}</div>
      <div className="ttt-games-history-game">{showPlayerIcon(9)}</div>
    </div>
  );
};

GamesHistoryComponent.propTypes = {
  gamesHistory: PropTypes.array.isRequired,
};

GamesHistoryComponent.defaultProps = {
  gamesHistory: [],
};

export { GamesHistoryComponent };
