import type { Meta, StoryObj } from "@storybook/react";

import { PlayedGamesComponent } from "../components";
import "../App.scss";

const meta = {
  title: "Components/Played Games",
  component: PlayedGamesComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PlayedGamesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render1: Story = {
  name: "Default",
  args: {
    numberGames: -1,
  },
};

export const Render2: Story = {
  name: "With games",
  args: {
    numberGames: 3,
  },
};
