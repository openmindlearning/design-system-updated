import * as styles from "./Tag.css";

import React, { ReactNode, forwardRef } from "react";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  variant?: "default" | "selected";
  children?: ReactNode;
}

export const Tag = forwardRef<HTMLElement, Props>(
  (
    {
      as: Component = "button",
      children,
      className,
      variant = "default",
      ...htmlElementAttributes
    }: Props,
    ref,
  ) => (
    <Component
      ref={ref}
      className={classnames(
        className,
        Component === "button" && styles.button,
        styles.tag[variant],
      )}
      {...htmlElementAttributes}
    >
      {children}
    </Component>
  ),
);

Tag.displayName = "Tag";
