import type { Meta, StoryObj } from "@storybook/react";

import { BoardSizeOptionsComponent } from "../components";
import { THREE } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Board Size Options",
  component: BoardSizeOptionsComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BoardSizeOptionsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    boardSize: THREE,
    setBoardSize: () => {},
    setBoardSizeSelected: () => {},
  },
};
