import React, { ReactNode } from "react";

import classnames from "classnames";
import * as styles from "./Label.css";

import { LockIcon } from "../../icons";

export type LabelVariantColors = "grey" | "green" | "yellow" | "red";
interface Props {
  children?: ReactNode;
  dataTestId?: string;
  showLock?: boolean;
  variant?: LabelVariantColors;
}

export function Label({
  children,
  dataTestId,
  showLock = false,
  variant = "grey",
}: Props): React.ReactElement {
  return (
    <span className={classnames(styles.base, styles.variant[variant])} data-testid={dataTestId}>
      {showLock && <LockIcon height={12} width={12} className={styles.icon} fill="currentColor" />}
      {children}
    </span>
  );
}
