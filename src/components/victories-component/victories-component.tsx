import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";

import { victoriesPlayerO, victoriesPlayerX } from "../../utils";

export type VictoriesComponentProps = {
  gamesHistory: number[];
};

/**
 * @description Victories component
 * @param {Array} gamesHistory
 * @returns {JSX}
 */
const VictoriesComponent: React.FC<VictoriesComponentProps> = ({
  gamesHistory,
}) => {
  // Total number of games
  const totalGames: number = gamesHistory.length;
  // Calculate the victory percentage of player O
  const percentagePlayerO: number =
    parseFloat(
      ((100 * victoriesPlayerO(gamesHistory)) / totalGames).toFixed(2)
    ) || 0;
  // Calculate the victory percentage of player X
  const percentagePlayerX: number =
    parseFloat(
      ((100 * victoriesPlayerX(gamesHistory)) / totalGames).toFixed(2)
    ) || 0;
  return (
    <div className="ttt-victories" data-testid="ttt-victories">
      <div className="ttt-row">
        <div className="ttt-player">
          <span>Player</span>
          <FontAwesomeIcon icon={faO} color="#fea151" />
        </div>
        <div className="ttt-percentage">
          <div className="ttt-value">{percentagePlayerO}%</div>
          <span>V</span>
        </div>
        <div className="ttt-percentage">
          <div className="ttt-value">{percentagePlayerX}%</div>
          <span>L</span>
        </div>
      </div>
      <div className="ttt-row">
        <div className="ttt-player">
          <span>Player</span>
          <FontAwesomeIcon icon={faX} color="#fea151" />
        </div>
        <div className="ttt-percentage">
          <div className="ttt-value">{percentagePlayerX}%</div>
          <span>V</span>
        </div>
        <div className="ttt-percentage">
          <div className="ttt-value">{percentagePlayerO}%</div>
          <span>L</span>
        </div>
      </div>
    </div>
  );
};

VictoriesComponent.propTypes = {
  gamesHistory: PropTypes.array.isRequired,
};

VictoriesComponent.defaultProps = {
  gamesHistory: [],
};

export { VictoriesComponent };
