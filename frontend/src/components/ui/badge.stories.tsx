import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "NeoUI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["purple", "cyan", "green", "yellow", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Purple: Story = {
  args: {
    variant: "purple",
    children: "NeoUI",
  },
};

export const Cyan: Story = {
  args: {
    variant: "cyan",
    children: "New",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
    children: "Active",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
    children: "Warning",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};
