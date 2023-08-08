import type { Meta, StoryObj } from "@storybook/react";

import { SquareComponent } from "../components";
import { PLAYER_O, PLAYER_X } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Square",
  component: SquareComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SquareComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Empty",
  args: {
    onClick: () => {},
  },
};

export const Render2: Story = {
  name: "Player O",
  args: {
    value: PLAYER_O,
    onClick: () => {},
  },
};

export const Render3: Story = {
  name: "Player X",
  args: {
    value: PLAYER_X,
    onClick: () => {},
  },
};
