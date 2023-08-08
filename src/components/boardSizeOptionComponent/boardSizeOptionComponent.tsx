import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";

export type BoardSizeOptionComponentProps = {
  option: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
};

/**
 * @description Board size option component
 * @param {number} option
 * @param {Function} onClick
 * @param {boolean} selected
 * @returns {JSX}
 */
const BoardSizeOptionComponent: React.FC<BoardSizeOptionComponentProps> = ({
  option,
  onClick,
  selected,
}) => {
  return (
    <div
      className={`ttt-board-size-option ${selected ? "selected" : ""}`}
      data-testid="ttt-board-size-option"
    >
      <button onClick={onClick}>
        <span>{`${option} x ${option}`}</span>
      </button>
    </div>
  );
};

BoardSizeOptionComponent.propTypes = {
  option: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

BoardSizeOptionComponent.defaultProps = {
  option: 0,
  onClick: () => {},
  selected: false,
};

export { BoardSizeOptionComponent };
