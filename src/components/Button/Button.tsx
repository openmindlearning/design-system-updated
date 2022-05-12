// TODO (SD): Resolve issue with import
import * as styles from "./Button.css";

import React, { ReactElement } from "react";
import classnames from "classnames";
import { AnimatedSpinner } from "../AnimatedSpinner";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
  Button Variants
  - Primary for primary actions. 
  - Secondary for alternative actions.
  - Destructive meant for actions that may remove or change a resource.
  */
  variant?: "primary" | "secondary" | "destructive" | "transparent";

  buttonSize?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  /**
   * Apply a loading state to the button
   * applies a spinner to indicate that
   * the result of the button click is loading
   */
  isLoading?: boolean;
  disabled?: boolean;
  accessibilityLabel?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "primary",
      buttonSize = "medium",
      isLoading = false,
      disabled = false,
      children,
      onClick = () => ({}),
      className = "",
      accessibilityLabel,
      ...htmlButtonProps
    }: Props,
    ref: React.LegacyRef<HTMLButtonElement>
  ): ReactElement => {
    return (
      <button
        type="button"
        className={classnames([
          styles.baseButton,
          styles.buttonTextSize[buttonSize],
          styles.buttonVariant[variant],
          styles.label,
          className,
        ])}
        onClick={onClick}
        aria-label={accessibilityLabel}
        disabled={disabled || isLoading}
        {...{ ref }}
        {...htmlButtonProps}
      >
        {isLoading ? (
          <>
            <AnimatedSpinner className={styles.buttonSpinner}></AnimatedSpinner>
            <span className={styles.loadingState}>{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
