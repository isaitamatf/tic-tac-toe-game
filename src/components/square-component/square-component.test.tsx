import { render, screen } from "@testing-library/react";

import { SquareComponent, SquareComponentProps } from "./square-component";
import { PLAYER_X } from "../../constants";

describe("Square Component", () => {
  const MockSquareComponentProps: SquareComponentProps = {
    value: 0,
    onClick: () => {},
  };

  it("Square is render", () => {
    render(
      <SquareComponent
        value={MockSquareComponentProps.value}
        onClick={MockSquareComponentProps.onClick}
      />
    );
    expect(screen.getByTestId("ttt-square")).toBeTruthy();
  });

  it("Square with player O", () => {
    const { container } = render(
      <SquareComponent
        value={MockSquareComponentProps.value}
        onClick={MockSquareComponentProps.onClick}
      />
    );
    expect(screen.getByTestId("ttt-square")).toBeTruthy();
    const svg = container.querySelector(
      "svg"
    ) as unknown as HTMLOrSVGImageElement;
    expect(svg.getAttribute("class")).toBe("svg-inline--fa fa-o ");
  });

  it("Square with player X", () => {
    const { container } = render(
      <SquareComponent
        value={PLAYER_X}
        onClick={MockSquareComponentProps.onClick}
      />
    );
    expect(screen.getByTestId("ttt-square")).toBeTruthy();
    const svg = container.querySelector(
      "svg"
    ) as unknown as HTMLOrSVGImageElement;
    expect(svg.getAttribute("class")).toBe("svg-inline--fa fa-x ");
  });
});
