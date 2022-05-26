import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  const tabs = [
    { title: "In Progress", value: "foo" },
    { title: "Previous", value: "bar" },
  ];

  const setSelection = vi.fn();
  it("Renders all provided tabs", () => {
    render(<Tabs tabs={tabs} selection={tabs[0]} setSelection={setSelection} />);

    tabs.forEach((tab) => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it("Does *not* render tab.value property", () => {
    render(<Tabs tabs={tabs} selection={tabs[0]} setSelection={setSelection} />);

    tabs.forEach((tab) => {
      expect(screen.queryByText(tab.value)).not.toBeInTheDocument();
    });
  });

  it("Fires onClick function when clicked", () => {
    render(<Tabs tabs={tabs} selection={tabs[0]} setSelection={setSelection} />);

    userEvent.click(screen.getByTestId(tabs[0].title));
    expect(setSelection).toHaveBeenCalled();
  });
});
