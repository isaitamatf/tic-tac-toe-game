import { render, screen } from "@testing-library/react";

import {
  BoardSizeOptionsComponent,
  BoardSizeOptionsComponentProps,
} from "./board-size-options-component";

describe("Board Size Options Component", () => {
  const MockBoardSizeOptionsComponentProps: BoardSizeOptionsComponentProps = {
    boardSize: 0,
    setBoardSize: () => {},
    setBoardSizeSelected: () => {},
  };

  it("Board Size Option is render", () => {
    render(
      <BoardSizeOptionsComponent
        boardSize={MockBoardSizeOptionsComponentProps.boardSize}
        setBoardSize={MockBoardSizeOptionsComponentProps.setBoardSize}
        setBoardSizeSelected={
          MockBoardSizeOptionsComponentProps.setBoardSizeSelected
        }
      />
    );
    expect(screen.getByTestId("ttt-board-size-options")).toBeTruthy();
  });
});
