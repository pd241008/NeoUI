import { render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Button } from "./button";

describe("Button Component", () => {
  afterEach(cleanup);

  test("renders with primary variant by default", async () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const button = getByRole("button", { name: /click me/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-neo-purple");
  });

  test("applies variant classes correctly", async () => {
    const { getByRole } = render(<Button variant="secondary">Secondary</Button>);
    const button = getByRole("button", { name: /secondary/i });
    
    expect(button).toHaveClass("bg-neo-cyan");
  });

  test("handles click events", async () => {
    let clicked = false;
    const { getByRole } = render(<Button onClick={() => clicked = true}>Click</Button>);
    const button = getByRole("button", { name: /click/i });
    
    button.click();
    expect(clicked).toBe(true);
  });
});
