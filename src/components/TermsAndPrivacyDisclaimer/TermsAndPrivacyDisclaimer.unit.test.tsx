import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { ACCESSIBILITY_LABELS, TermsAndPrivacyDisclaimer } from "./TermsAndPrivacyDisclaimer";
import { describe, it, expect } from "vitest";

describe("TermsAndPrivacyDisclaimer", () => {
  it("should render without issues", () => {
    render(<TermsAndPrivacyDisclaimer />);
    expect(screen.getByText(/by continuing, you agree to studio's/i)).toBeInTheDocument();
  });

  it("should have proper hrefs", () => {
    render(<TermsAndPrivacyDisclaimer />);

    expect(screen.getByLabelText(ACCESSIBILITY_LABELS.TERMS)).toHaveAttribute(
      "href",
      "https://studio.com/terms",
    );
    expect(screen.getByLabelText(ACCESSIBILITY_LABELS.PRIVACY)).toHaveAttribute(
      "href",
      "https://studio.com/privacy",
    );
  });

  it("should have customizable preface", () => {
    render(
      <TermsAndPrivacyDisclaimer preface="if u don't agree to our terms david blaine will make you disappear" />,
    );
    expect(screen.getByText(/david blaine/i)).toBeInTheDocument();
  });
});
