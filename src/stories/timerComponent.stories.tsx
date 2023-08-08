import type { Meta, StoryObj } from "@storybook/react";

import { TimerComponent } from "../components";
import "../App.scss";

const meta = {
  title: "Components/Timer",
  component: TimerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TimerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    time: 0,
    setTime: () => {},
    timeIsRunning: false,
  },
};

export const Render2: Story = {
  name: "1 minute",
  args: {
    time: 60,
    setTime: () => {},
    timeIsRunning: false,
  },
};

export const Render3: Story = {
  name: "1 hour",
  args: {
    time: 3600,
    setTime: () => {},
    timeIsRunning: false,
  },
};
