import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "../theme-toggle"; // It's in components/theme-toggle.tsx
import { ThemeProvider } from "../theme-provider";

const meta: Meta<typeof ThemeToggle> = {
  title: "NeoUI/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
