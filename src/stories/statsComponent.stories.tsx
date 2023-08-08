import type { Meta, StoryObj } from "@storybook/react";

import { StatsComponent } from "../components";
import { PLAYER_O, PLAYER_X } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Stats",
  component: StatsComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StatsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    gamesHistory: [],
  },
};

export const Render2: Story = {
  name: "With games",
  args: {
    gamesHistory: [PLAYER_O, PLAYER_X, PLAYER_O, PLAYER_X, PLAYER_O],
  },
};
