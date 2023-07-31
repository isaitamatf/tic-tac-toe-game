import type { Meta, StoryObj } from "@storybook/react";

import { GamesHistoryComponent } from "../components";
import { PLAYER_O, PLAYER_X } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Game History",
  component: GamesHistoryComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof GamesHistoryComponent>;

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
    gamesHistory: [PLAYER_O, PLAYER_X, PLAYER_O, PLAYER_X],
  },
};
