import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TEST_LABELS, TimelineProjectCard } from "./TimelineProjectCard";
import { describe, it, expect } from "vitest";

describe("TimelineProjectCard", () => {
  it("should render without issues", () => {
    const onClickFn = vi.fn();

    render(
      <TimelineProjectCard
        project={{
          type: "Project 2B",
          label: "Sing Anything",
          title: "Love Song",
          description:
            "Ran out of air a lot today. Any feedback? I've been working on centering my self before I start singing.",
        }}
        attention={{
          numReactions: 2,
          numComments: 1,
        }}
        onClick={onClickFn}
        mediaSlot={<div>mediaSlot</div>}
      />,
    );
    expect(screen.getByText(/project 2b/i)).toBeInTheDocument();
    expect(screen.getByText(/sing anything/i)).toBeInTheDocument();
    expect(screen.getByText(/love song/i)).toBeInTheDocument();
    expect(screen.getByText(/any feedback\?/i)).toBeInTheDocument();
    expect(screen.getByText(/2 reactions/i)).toBeInTheDocument();
    expect(screen.getByText(/1 comment/i)).toBeInTheDocument();
    expect(screen.getByText(/mediaSlot/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(TEST_LABELS.TIMELINE_PROJECT_CARD));
    expect(onClickFn).toHaveBeenCalled();
  });
});
