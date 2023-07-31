import { render, screen } from "@testing-library/react";

import { TimerComponent, TimerComponentProps } from "./timer-component";

describe("Timer Component", () => {
  const MockTimerComponentProps: TimerComponentProps = {
    time: 0,
    setTime: () => {},
    timeIsRunning: false,
  };

  it("Timer is render", () => {
    render(
      <TimerComponent
        time={MockTimerComponentProps.time}
        setTime={MockTimerComponentProps.setTime}
        timeIsRunning={MockTimerComponentProps.timeIsRunning}
      />
    );
    expect(screen.getByTestId("ttt-timer")).toBeTruthy();
  });

  it("Timer with 1 minute value", () => {
    const { container } = render(
      <TimerComponent
        time={60}
        setTime={MockTimerComponentProps.setTime}
        timeIsRunning={MockTimerComponentProps.timeIsRunning}
      />
    );
    expect(screen.getByTestId("ttt-timer")).toBeTruthy();
    const component = container.getElementsByClassName("ttt-timer");
    expect(component[0]).toHaveTextContent("00:01:00");
  });

  it("Timer with 1 hour value", () => {
    const { container } = render(
      <TimerComponent
        time={3600}
        setTime={MockTimerComponentProps.setTime}
        timeIsRunning={MockTimerComponentProps.timeIsRunning}
      />
    );
    expect(screen.getByTestId("ttt-timer")).toBeTruthy();
    const component = container.getElementsByClassName("ttt-timer");
    expect(component[0]).toHaveTextContent("01:00:00");
  });
});
