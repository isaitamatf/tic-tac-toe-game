import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export type PlayedGamesComponentProps = {
  numberGames: number;
};

/**
 * @description Played games component
 * @param {number} numberGames
 * @returns {JSX}
 */
const PlayedGamesComponent: React.FC<PlayedGamesComponentProps> = ({
  numberGames,
}) => {
  /**
   * @description Return the color of the icon
   * @param gamePosition
   * @returns {string}
   */
  const colorGame = (gamePosition: number): string => {
    return gamePosition <= numberGames ? "#fea151" : "#e8e6e3";
  };
  return (
    <div className="ttt-played-games" data-testid="ttt-played-games">
      <FontAwesomeIcon icon={faCircle} color={colorGame(0)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(1)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(2)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(3)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(4)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(5)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(6)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(7)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(8)} />
      <FontAwesomeIcon icon={faCircle} color={colorGame(9)} />
    </div>
  );
};

PlayedGamesComponent.propTypes = {
  numberGames: PropTypes.number.isRequired,
};

PlayedGamesComponent.defaultProps = {
  numberGames: 0,
};

export { PlayedGamesComponent };
