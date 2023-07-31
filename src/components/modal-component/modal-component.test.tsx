import { render, screen } from "@testing-library/react";

import { ModalComponent } from "./modal-component";

describe("Modal Component", () => {
  it("Modal is render", () => {
    render(<ModalComponent>
      
    </ModalComponent>);
    expect(screen.getByTestId("ttt-modal")).toBeTruthy();
  });

  it("Modal with content", () => {
    render(
      <ModalComponent>
        <span>Test</span>
      </ModalComponent>
    );
    expect(screen.getByTestId("ttt-modal")).toBeTruthy();
    expect(screen.getByText("Test")).toBeTruthy();
  });
});
