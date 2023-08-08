import type { Meta, StoryObj } from "@storybook/react";

import { BoardComponent } from "../components";
import { THREE, SIX, NINE, PLAYER_O, PLAYER_X } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Board",
  component: BoardComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BoardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "3x3",
  args: {
    boardSize: THREE,
    gamesHistory: [],
    setGameHistory: () => {},
    newGame: () => {},
  },
};

export const Render2: Story = {
  name: "6x6",
  args: {
    boardSize: SIX,
    gamesHistory: [],
    setGameHistory: () => {},
    newGame: () => {},
  },
};

export const Render3: Story = {
  name: "9x9",
  args: {
    boardSize: NINE,
    gamesHistory: [],
    setGameHistory: () => {},
    newGame: () => {},
  },
};

export const Render4: Story = {
  name: "With games",
  args: {
    boardSize: THREE,
    gamesHistory: [PLAYER_O, PLAYER_X, PLAYER_O, PLAYER_X],
    setGameHistory: () => {},
    newGame: () => {},
  },
};
