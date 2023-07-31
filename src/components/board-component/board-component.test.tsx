import { fireEvent, render, screen } from "@testing-library/react";

import { BoardComponent, BoardComponentProps } from "./board-component";
import { SIX, THREE, NINE, PLAYER_O, PLAYER_X } from "../../constants";

describe("Board Component", () => {
  const MockBoardComponentProps: BoardComponentProps = {
    boardSize: THREE,
    gamesHistory: [],
    setGameHistory: () => {},
    newGame: () => {},
  };

  it("Board is render", () => {
    render(
      <BoardComponent
        boardSize={MockBoardComponentProps.boardSize}
        gamesHistory={MockBoardComponentProps.gamesHistory}
        setGameHistory={MockBoardComponentProps.setGameHistory}
        newGame={MockBoardComponentProps.newGame}
      />
    );
    expect(screen.getByTestId("ttt-board")).toBeTruthy();
  });

  it("Board is 6x6", () => {
    const { container } = render(
      <BoardComponent
        boardSize={SIX}
        gamesHistory={MockBoardComponentProps.gamesHistory}
        setGameHistory={MockBoardComponentProps.setGameHistory}
        newGame={MockBoardComponentProps.newGame}
      />
    );
    expect(screen.getByTestId("ttt-board")).toBeTruthy();
    expect(container.querySelectorAll(".ttt-square").length).toBe(SIX * SIX);
  });

  it("Board is 9x9", () => {
    const { container } = render(
      <BoardComponent
        boardSize={NINE}
        gamesHistory={MockBoardComponentProps.gamesHistory}
        setGameHistory={MockBoardComponentProps.setGameHistory}
        newGame={MockBoardComponentProps.newGame}
      />
    );
    expect(screen.getByTestId("ttt-board")).toBeTruthy();
    expect(container.querySelectorAll(".ttt-square").length).toBe(NINE * NINE);
  });

  it("Board with games", () => {
    render(
      <BoardComponent
        boardSize={MockBoardComponentProps.boardSize}
        gamesHistory={[PLAYER_O, PLAYER_O, PLAYER_X]}
        setGameHistory={MockBoardComponentProps.setGameHistory}
        newGame={MockBoardComponentProps.newGame}
      />
    );
    expect(screen.getByTestId("ttt-board")).toBeTruthy();
    expect(screen.getByText("2")).toBeTruthy();
    expect(screen.getByText("1")).toBeTruthy();
  });

  it("Playing Tic Tac Toe game", () => {
    const { container } = render(
      <BoardComponent
        boardSize={MockBoardComponentProps.boardSize}
        gamesHistory={[PLAYER_O, PLAYER_O, PLAYER_X]}
        setGameHistory={MockBoardComponentProps.setGameHistory}
        newGame={MockBoardComponentProps.newGame}
      />
    );
    expect(screen.getByTestId("ttt-board")).toBeTruthy();
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(THREE * THREE);
    fireEvent.click(buttons[0]);
    const board = container.querySelector(
      `.ttt-board-by-${MockBoardComponentProps.boardSize}`
    ) as HTMLDivElement;
    expect(board.querySelectorAll("svg").length).toBe(1);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[6]);
    expect(screen.getByText("The player O is the winner.")).toBeTruthy();
  });
});
