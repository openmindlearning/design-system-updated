import React from "react";
import { screen, render } from "@testing-library/react";
import { Option } from "./Option";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Option", () => {
  it("renders children", () => {
    const anyFn = vi.fn();
    const anyOptionString = "Come to my window";
    render(
      <Option onClick={anyFn}>
        <span>{anyOptionString}</span>
      </Option>,
    );
    expect(screen.getByText(anyOptionString)).toBeInTheDocument();
  });
  it("fires onclick function when clicked", () => {
    const onClick = vi.fn();
    const anyOptionString = "(Windmill windmill)";
    const optionTestId = "I'mAnOption";
    render(
      <Option onClick={onClick} dataTestId={optionTestId}>
        <span>{anyOptionString}</span>
      </Option>,
    );
    userEvent.click(screen.getByTestId(optionTestId));
    expect(onClick).toHaveBeenCalled();
  });
});
