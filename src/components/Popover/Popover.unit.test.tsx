import React, { useRef, useState } from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Button, Popover } from "../../components";

const SimplePopover = () => {
  const [visible, setVisible] = useState(false);

  const referenceRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        ref={referenceRef}
        accessibilityLabel="toggle-popover"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        toggle
      </Button>

      <Popover {...{ referenceRef, visible }}>hello, world</Popover>
    </>
  );
};
describe("Popover", () => {
  it("should toggle content when clicked", () => {
    render(<SimplePopover />);
    const toggleButton = screen.getByLabelText(/toggle-popover/i);

    expect(screen.queryByText(/hello, world/i)).not.toBeVisible();
    userEvent.click(toggleButton);
    expect(screen.queryByText(/hello, world/i)).toBeVisible();
  });
});
