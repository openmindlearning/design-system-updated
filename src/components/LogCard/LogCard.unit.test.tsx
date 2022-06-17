import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { LogCard, LOG_DROPDOWN, LOG_MEDIA } from "./LogCard";
import { describe, it, expect } from "vitest";

describe("LogCard", () => {
  it("should render without issues", () => {
    const anyLabelText = "a label";
    const anyTitleText = "a title";
    const anyText = "a text";

    render(<LogCard labelText={anyLabelText} title={anyTitleText} text={anyText} />);
    expect(screen.getByText(anyLabelText)).toBeInTheDocument();
    expect(screen.getByText(anyTitleText)).toBeInTheDocument();
    expect(screen.getByText(anyText)).toBeInTheDocument();
  });

  it("should render a mediaElement if passed in", () => {
    const anyLabelText = "a label";
    const anyTitleText = "a title";
    const anyText = "a text";
    const anyMedia = (
      <img
        style={{ width: "100px", height: "100px", borderRadius: "8px" }}
        alt="kitten"
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
      />
    );

    render(
      <LogCard
        labelText={anyLabelText}
        title={anyTitleText}
        text={anyText}
        mediaElement={anyMedia}
      />,
    );

    expect(screen.getByTestId(LOG_MEDIA)).toBeInTheDocument();
  });

  it("should render a reflectionsElement if passed in", () => {
    const anyLabelText = "a label";
    const anyTitleText = "a title";
    const anyText = "a text";
    const anyReflectionsElement = <p>This cat is just very cute and fluffy</p>;

    render(
      <LogCard
        labelText={anyLabelText}
        title={anyTitleText}
        text={anyText}
        reflectionsElement={anyReflectionsElement}
      />,
    );

    expect(screen.getByText("This cat is just very cute and fluffy")).toBeInTheDocument();
  });

  it("should render a actionDropdownElement if passed in", () => {
    const anyLabelText = "a label";
    const anyTitleText = "a title";
    const anyText = "a text";
    const anyActionDropdownElement = (
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
    );

    render(
      <LogCard
        labelText={anyLabelText}
        title={anyTitleText}
        text={anyText}
        actionDropdownElement={anyActionDropdownElement}
      />,
    );

    expect(screen.getByTestId(LOG_DROPDOWN)).toBeInTheDocument();
  });
});
