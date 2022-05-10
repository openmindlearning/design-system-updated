import React from "react";
import { screen, render } from "@testing-library/react";
import { Tag } from "./Tag";
import { describe, it, expect } from "vitest";

describe("Tag", () => {
  it("should render a string", () => {
    render(<Tag>hello, world</Tag>);
    expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
  });

  it("should render a component", () => {
    render(
      <Tag>
        <p>goodbye, world</p>
      </Tag>,
    );
    expect(screen.getByText(/goodbye, world/i)).toBeInTheDocument();
  });
});
