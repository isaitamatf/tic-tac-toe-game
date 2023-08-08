import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";

import { PLAYER_O, PLAYER_X } from "../../constants";

export type SquareComponentProps = {
  value?: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * @description Square component
 * @param {number} value
 * @param {Function} onClick
 * @returns {JSX}
 */
const SquareComponent: React.FC<SquareComponentProps> = ({
  value,
  onClick,
}) => {
  const squareDisabled: boolean =
    value === PLAYER_O || value === PLAYER_X ? true : false;
  /**
   * @description Return the icon depend on the player turn
   * @returns {JSX}
   */
  const showIcon = () => {
    if (squareDisabled) {
      return value === PLAYER_O ? (
        <FontAwesomeIcon icon={faO} color="#fea151" />
      ) : (
        <FontAwesomeIcon icon={faX} color="#363b3d" />
      );
    }
  };
  return (
    <div
      className={`ttt-square ${squareDisabled ? "disabled" : ""}`}
      data-testid="ttt-square"
    >
      <button onClick={squareDisabled ? () => {} : onClick}>
        {showIcon()}
      </button>
    </div>
  );
};

SquareComponent.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

SquareComponent.defaultProps = {
  onClick: () => {},
};

export { SquareComponent };
