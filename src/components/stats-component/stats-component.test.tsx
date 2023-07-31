import { render, screen } from "@testing-library/react";

import { StatsComponent, StatsComponentProps } from "./stats-component";
import { PLAYER_O, PLAYER_X } from "../../constants";

describe("Stats Component", () => {
  const MockStatsComponentProps: StatsComponentProps = {
    gamesHistory: [],
  };

  it("Stats is render", () => {
    render(
      <StatsComponent gamesHistory={MockStatsComponentProps.gamesHistory} />
    );
    expect(screen.getByTestId("ttt-stats")).toBeTruthy();
  });

  it("Stats with games", () => {
    const { container } = render(
      <StatsComponent
        gamesHistory={[PLAYER_O, PLAYER_O, PLAYER_O, PLAYER_X, PLAYER_X]}
      />
    );
    expect(screen.getByTestId("ttt-stats")).toBeTruthy();
    const percentage = container.getElementsByClassName("ttt-value");
    expect(percentage[0]).toHaveTextContent("60");
    expect(percentage[1]).toHaveTextContent("40");
    const playedGames = container.querySelector(".ttt-played-games");
    expect(playedGames).toBeTruthy();
    const games = playedGames?.querySelectorAll(
      "svg"
    ) as unknown as HTMLOrSVGImageElement[];
    expect(games.length).toBe(10);
    const game = games[0] as HTMLOrSVGImageElement;
    expect(game.getAttribute("color")).toBe("#fea151");
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
