import type { Meta, StoryObj } from "@storybook/react";

import { BoardSizeOptionComponent } from "../components";
import { THREE } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Board Size Option",
  component: BoardSizeOptionComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BoardSizeOptionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    option: THREE,
    onClick: () => {},
    selected: false,
  },
};

export const Render2: Story = {
  name: "Option selected",
  args: {
    option: THREE,
    onClick: () => {},
    selected: true,
  },
};
