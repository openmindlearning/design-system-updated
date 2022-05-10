import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  ActionMenu,
  ACTION_MENU_OPEN_LABEL,
  ACTION_MENU_OPEN_MENU_ELEMENT_LABEL,
} from "./ActionMenu";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import * as useIntersectionObserver from "../../hooks/useIntersectionObserver/useIntersectionObserver";

/**
 * @vitest-environment jsdom
 */

describe("ActionMenu", () => {
  vi.spyOn(useIntersectionObserver, "useIsOnScreen").mockImplementation(() => true);
  it("renders open menu with passed in elements when user clicks open button", () => {
    const anyFirstTestElementLabel = "wonderboy";
    const anySecondTestElementLabel = "what is the secret of your power?";
    render(
      <ActionMenu>
        <span data-testid={anyFirstTestElementLabel}> anyFirstElement </span>
        <span data-testid={anySecondTestElementLabel}> anySecondElement </span>
      </ActionMenu>,
    );
    const openButton = screen.getByTestId(ACTION_MENU_OPEN_MENU_ELEMENT_LABEL);
    userEvent.click(openButton);

    expect(screen.getByTestId(ACTION_MENU_OPEN_LABEL)).toBeVisible();
    expect(screen.getByTestId(anyFirstTestElementLabel)).toBeTruthy();
    expect(screen.getByTestId(anySecondTestElementLabel)).toBeTruthy();
  });

  it("renders open menu with passed in elements when defaultOpen prop is true", () => {
    const anyFirstTestElementLabel = "makinMaWayDowntownWalkinFastStrangersPassingImHomebound";
    const anySecondTestElementLabel = "DoDoDoDoDoDoDo_DoDoDo_DoDoDoDoDoDoDoDo";
    render(
      <ActionMenu defaultOpen>
        <span data-testid={anyFirstTestElementLabel}> anyFirstElement </span>
        <span data-testid={anySecondTestElementLabel}> anySecondElement </span>
      </ActionMenu>,
    );
    expect(screen.getByTestId(ACTION_MENU_OPEN_LABEL)).toBeVisible();
    expect(screen.getByTestId(anyFirstTestElementLabel)).toBeTruthy();
    expect(screen.getByTestId(anySecondTestElementLabel)).toBeTruthy();
  });

  it("closes menu when user clicks outside", () => {
    const anyOutsideElementLabel = "But BANANABREAD at WORKDUUUUDE?!";
    render(
      <div>
        <button data-testid={anyOutsideElementLabel}> outside </button>
        <ActionMenu defaultOpen>
          <span>anyElement</span>
        </ActionMenu>
      </div>,
    );
    const outsideElement = screen.getByTestId(anyOutsideElementLabel);
    expect(outsideElement).toBeVisible();

    expect(screen.getByTestId(ACTION_MENU_OPEN_LABEL)).toBeVisible();
    userEvent.click(outsideElement);
    expect(screen.queryByTestId(ACTION_MENU_OPEN_LABEL)).toBeNull();
  });
});
