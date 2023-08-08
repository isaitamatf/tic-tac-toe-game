import type { Meta, StoryObj } from "@storybook/react";

import { ModalComponent, ButtonComponent } from "../components";
import "../App.scss";

const meta = {
  title: "Components/Modal",
  component: ModalComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    children: <></>,
  },
};

export const Render2: Story = {
  name: "With content",
  args: {
    children: <ButtonComponent text="Test" onClick={() => {}} />,
  },
};
