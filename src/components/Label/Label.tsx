import React, { ReactNode } from "react";

import classnames from "classnames";
import * as styles from "./Label.css";

import { LockIcon } from "../../icons";

interface Props {
  children?: ReactNode;
  dataTestId?: string;
  showLock?: boolean;
  variant?: "grey" | "green" | "yellow" | "red";
}

export function Label({
  children,
  dataTestId,
  showLock = false,
  variant = "grey",
}: Props): React.ReactElement {
  return (
    <div className={classnames(styles.base, styles.variant[variant])} data-testid={dataTestId}>
      {showLock && <LockIcon height={12} width={12} className={styles.icon} fill="currentColor" />}
      {children}
    </div>
  );
}
