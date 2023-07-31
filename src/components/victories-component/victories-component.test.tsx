import { render, screen } from "@testing-library/react";

import {
  VictoriesComponent,
  VictoriesComponentProps,
} from "./victories-component";
import { PLAYER_O, PLAYER_X } from "../../constants";

describe("Victories Component", () => {
  const MockVictoriesComponentProps: VictoriesComponentProps = {
    gamesHistory: [],
  };

  it("Victories component is render", () => {
    render(
      <VictoriesComponent
        gamesHistory={MockVictoriesComponentProps.gamesHistory}
      />
    );
    expect(screen.getByTestId("ttt-victories")).toBeTruthy();
  });

  it("Victories and losers percentage", () => {
    const { container } = render(
      <VictoriesComponent
        gamesHistory={[PLAYER_O, PLAYER_O, PLAYER_O, PLAYER_X, PLAYER_X]}
      />
    );
    expect(screen.getByTestId("ttt-victories")).toBeTruthy();
    const percentage = container.getElementsByClassName("ttt-value");
    expect(percentage[0]).toHaveTextContent("60");
    expect(percentage[1]).toHaveTextContent("40");
  });
});
