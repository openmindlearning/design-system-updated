import * as styles from "./Tag.css";

import React, { ReactNode, forwardRef } from "react";
import classnames from "classnames";

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "selected";
};

export const Tag = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant = "default" }: Props, ref) => (
    <div ref={ref} className={classnames(className, styles.tag[variant])}>
      {children}
    </div>
  ),
);

Tag.displayName = "Tag";
