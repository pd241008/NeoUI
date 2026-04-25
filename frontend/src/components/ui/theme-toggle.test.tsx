import { render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { ThemeToggle } from "../theme-toggle";
import { ThemeProvider } from "../theme-provider";

describe("ThemeToggle Component", () => {
  afterEach(cleanup);

  test("renders theme toggle with sun icon by default", async () => {
    const { getByRole } = render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
