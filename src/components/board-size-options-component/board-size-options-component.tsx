import React from "react";
import PropTypes from "prop-types";

import { BoardSizeOptionComponent, ButtonComponent } from "../../components";
import { THREE, SIX, NINE } from "../../constants";

export type BoardSizeOptionsComponentProps = {
  boardSize: number;
  setBoardSize: React.Dispatch<React.SetStateAction<number>>;
  setBoardSizeSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * @description Board size options component
 * @param {number} boardSize
 * @param {Function} setBoardSize
 * @param {Function} setBoardSizeSelected
 * @returns {JSX}
 */
const BoardSizeOptionsComponent: React.FC<BoardSizeOptionsComponentProps> = ({
  boardSize,
  setBoardSize,
  setBoardSizeSelected,
}) => {
  return (
    <div
      className="ttt-board-size-options"
      data-testid="ttt-board-size-options"
    >
      <div className="ttt-row">
        <BoardSizeOptionComponent
          option={THREE}
          onClick={() => setBoardSize(THREE)}
          selected={boardSize === THREE}
        />
        <BoardSizeOptionComponent
          option={SIX}
          onClick={() => setBoardSize(SIX)}
          selected={boardSize === SIX}
        />
        <BoardSizeOptionComponent
          option={NINE}
          onClick={() => setBoardSize(NINE)}
          selected={boardSize === NINE}
        />
      </div>
      <div className="ttt-row">
        <ButtonComponent
          text="Start"
          onClick={() => setBoardSizeSelected(true)}
        />
      </div>
    </div>
  );
};

BoardSizeOptionsComponent.propTypes = {
  boardSize: PropTypes.number.isRequired,
  setBoardSize: PropTypes.func.isRequired,
  setBoardSizeSelected: PropTypes.func.isRequired,
};

BoardSizeOptionsComponent.defaultProps = {
  boardSize: THREE,
  setBoardSize: () => {},
  setBoardSizeSelected: () => {},
};

export { BoardSizeOptionsComponent };
