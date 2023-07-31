import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App Component", () => {
  it("Component is render", () => {
    render(<App />);
    expect(screen.getByText("Tic Tac Toe Game")).toBeTruthy();
  });
});
