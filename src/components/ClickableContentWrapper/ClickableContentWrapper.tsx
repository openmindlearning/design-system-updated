import { clickableContentWrapperButton, emptyButtonStyle } from "./ClickableContentWrapper.css";
import classNames from "classnames";
import React, { CSSProperties, MouseEvent, KeyboardEvent } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  cypressId?: string;
  dataTestId?: string;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  role?: string;
  style?: CSSProperties;
  // if using default focus; therefore defaults to true iff useDefaultFocus == true
  // whether to blur on click - because of :focus-visible should only be visually necessary
  // whether to use the default button focus or override it
  useAutoBlur?: boolean;
  // whether to use the default button focus or override it
  useDefaultFocus?: boolean;
};

/*
 * Wraps content in a button, enabling the element's intrinsic accessibility features
 * while removing the unwanted default button styles
 * i.e. wrap a "clickable" svg or div with this component
 */
export const ClickableContentWrapper = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      useDefaultFocus = false,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onKeyDown,
      className = "",
      cypressId = "",
      dataTestId = "",
      id,
      useAutoBlur = useDefaultFocus,
      style,
      disabled = false,
      ...otherProps
    }: Props,
    ref: React.LegacyRef<HTMLButtonElement>,
  ) => {
    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
      if (useAutoBlur) {
        e.currentTarget.blur();
      }
      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        id={id}
        data-cy={cypressId}
        data-testid={dataTestId}
        onClick={clickHandler}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames(
          useDefaultFocus ? emptyButtonStyle : clickableContentWrapperButton,
          className,
        )}
        {...{ ref, disabled, style }}
        {...otherProps}
      />
    );
  },
);

ClickableContentWrapper.displayName = "ClickableContentWrapper";
