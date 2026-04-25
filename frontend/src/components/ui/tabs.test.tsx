import { render, cleanup } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

describe("Tabs Component", () => {
  afterEach(cleanup);

  test("switches tabs on click", async () => {
    const { getByText } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    const trigger2 = getByText("Tab 2");
    expect(getByText("Content 1")).toBeInTheDocument();
    
    trigger2.click();
    expect(getByText("Content 2")).toBeInTheDocument();
  });
});
