import { render, screen } from "@testing-library/react";

import {
  GamesHistoryComponent,
  GamesHistoryComponentProps,
} from "./games-history-component";
import { PLAYER_O, PLAYER_X } from "../../constants";

describe("Games History Component", () => {
  const MockGamesHistoryComponentProps: GamesHistoryComponentProps = {
    gamesHistory: [],
  };

  it("Games History is render", () => {
    render(
      <GamesHistoryComponent
        gamesHistory={MockGamesHistoryComponentProps.gamesHistory}
      />
    );
    expect(screen.getByTestId("ttt-games-history")).toBeTruthy();
  });

  it("Games History with games", () => {
    const { container } = render(
      <GamesHistoryComponent
        gamesHistory={[PLAYER_O, PLAYER_O, PLAYER_O, PLAYER_X, PLAYER_X]}
      />
    );
    expect(screen.getByTestId("ttt-games-history")).toBeTruthy();
    const gamesHistory = container.querySelectorAll(
      ".ttt-games-history-game"
    ) as unknown as HTMLDivElement[];
    expect(gamesHistory).toBeTruthy();
    expect(gamesHistory.length).toBe(10);
    expect(
      container.querySelector(".ttt-games-history")?.querySelectorAll("svg")
        .length
    ).toBe(5);
  });
});
