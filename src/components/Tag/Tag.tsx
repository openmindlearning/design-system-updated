import * as styles from "./Tag.css";

import React, { ReactNode, forwardRef } from "react";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "selected";
}

export const Tag = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant = "default", ...divAttributes }: Props, ref) => (
    <div ref={ref} className={classnames(className, styles.tag[variant])} {...divAttributes}>
      {children}
    </div>
  ),
);

Tag.displayName = "Tag";
