import * as styles from "./Tag.css";

import React, { ReactNode, forwardRef } from "react";

type Props = {
  children?: ReactNode;
};

export const Tag = forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
  <div ref={ref} className={styles.tag}>
    {children}
  </div>
));

Tag.displayName = "Tag";
