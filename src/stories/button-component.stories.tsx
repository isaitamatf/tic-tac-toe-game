import type { Meta, StoryObj } from "@storybook/react";

import { ButtonComponent } from "../components";
import { THREE } from "../constants";
import "../App.scss";

const meta = {
  title: "Components/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    text: "Test",
    onClick: () => {},
  },
};
