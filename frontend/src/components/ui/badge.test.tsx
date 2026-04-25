import { render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Badge } from "./badge";

describe("Badge Component", () => {
  afterEach(cleanup);

  test("renders with purple variant by default", async () => {
    const { getByText } = render(<Badge>Badge</Badge>);
    const badge = getByText("Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-neo-purple");
  });

  test("applies variant classes correctly", async () => {
    const { getByText } = render(<Badge variant="cyan">Cyan</Badge>);
    const badge = getByText("Cyan");
    
    expect(badge).toHaveClass("bg-neo-cyan");
  });
});
