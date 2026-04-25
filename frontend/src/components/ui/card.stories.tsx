import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "NeoUI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Neo</CardTitle>
        <CardDescription>Deploy your brutalist interface in seconds.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">High-performance Rust CLI powering your React ecosystem with zero overhead.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  ),
};
