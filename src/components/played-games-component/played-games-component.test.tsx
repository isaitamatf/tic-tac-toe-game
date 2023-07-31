import { render, screen } from "@testing-library/react";

import {
  PlayedGamesComponent,
  PlayedGamesComponentProps,
} from "./played-games-component";

describe("Played Games Component", () => {
  const MockPlayedGamesComponentProps: PlayedGamesComponentProps = {
    numberGames: 0,
  };

  it("Played Games is render", () => {
    render(
      <PlayedGamesComponent
        numberGames={MockPlayedGamesComponentProps.numberGames}
      />
    );
    expect(screen.getByTestId("ttt-played-games")).toBeTruthy();
  });

  it("Played Games with games", () => {
    const { container } = render(<PlayedGamesComponent numberGames={5} />);
    expect(screen.getByTestId("ttt-played-games")).toBeTruthy();
    const playedGames = container.querySelector(".ttt-played-games");
    expect(playedGames).toBeTruthy();
    const games = playedGames?.querySelectorAll(
      "svg"
    ) as unknown as HTMLOrSVGImageElement[];
    expect(games.length).toBe(10);
    const game = games[0] as HTMLOrSVGImageElement;
    expect(game.getAttribute("color")).toBe("#fea151");
  });
});
