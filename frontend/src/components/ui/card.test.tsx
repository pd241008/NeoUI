import { render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Card, CardTitle } from "./card";

describe("Card Component", () => {
  afterEach(cleanup);

  test("renders card with brutalist shadow", async () => {
    const { getByText } = render(
      <Card>
        <CardTitle>Title</CardTitle>
      </Card>
    );
    const title = getByText("Title");
    const card = title.parentElement?.parentElement;
    
    expect(card).toHaveClass("shadow-[8px_8px_0px_black]");
  });

  test("renders card title with uppercase styling", async () => {
    const { getByText } = render(<CardTitle>Testing</CardTitle>);
    const title = getByText("Testing");
    
    expect(title).toHaveClass("uppercase");
  });
});
