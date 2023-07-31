import { render, screen } from "@testing-library/react";

import { ButtonComponent, ButtonComponentProps } from "./button-component";
import { THREE } from "../../constants";

describe("Button Component", () => {
  const MockButtonComponentProps: ButtonComponentProps = {
    text: THREE.toString(),
    onClick: () => {},
  };

  it("Button is render", () => {
    render(
      <ButtonComponent
        text={MockButtonComponentProps.text}
        onClick={MockButtonComponentProps.onClick}
      />
    );
    expect(screen.getByTestId("ttt-button")).toBeTruthy();
    expect(screen.getByText(MockButtonComponentProps.text)).toBeTruthy();
  });
});
