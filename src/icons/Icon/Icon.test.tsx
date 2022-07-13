import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Icon, ICON_TEST_ID } from "./Icon";
import { describe, it, expect, vi } from "vitest";
import { IconVariant } from "./constants";

/**
 * @vitest-environment jsdom
 */

describe("Icon", () => {
  it("renders an icon when basic props are passed in", () => {
    render(<Icon variant={IconVariant.Hourglass} />);

    expect(screen.getByTestId(ICON_TEST_ID)).toBeInTheDocument();
  });
});
