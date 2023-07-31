import { render, screen } from "@testing-library/react";

import {
  BoardSizeOptionComponent,
  BoardSizeOptionComponentProps,
} from "./board-size-option-component";
import { THREE } from "../../constants";

describe("Board Size Option Component", () => {
  const MockBoardSizeOptionComponentProps: BoardSizeOptionComponentProps = {
    option: THREE,
    onClick: () => {},
    selected: false,
  };

  it("Board Size Option is render", () => {
    render(
      <BoardSizeOptionComponent
        option={MockBoardSizeOptionComponentProps.option}
        onClick={MockBoardSizeOptionComponentProps.onClick}
        selected={MockBoardSizeOptionComponentProps.selected}
      />
    );
    expect(screen.getByTestId("ttt-board-size-option")).toBeTruthy();
  });

  it("Board Size Option selected", () => {
    const { container } = render(
      <BoardSizeOptionComponent
        option={MockBoardSizeOptionComponentProps.option}
        onClick={MockBoardSizeOptionComponentProps.onClick}
        selected={!MockBoardSizeOptionComponentProps.selected}
      />
    );
    expect(screen.getByTestId("ttt-board-size-option")).toBeTruthy();
    expect(container.querySelector(".selected")).toBeTruthy();
  });
});
