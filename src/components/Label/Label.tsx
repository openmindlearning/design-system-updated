import React, { ReactNode } from "react";

import classnames from "classnames";
import * as styles from "./Label.css";

import { LockIcon, HourglassIcon } from "../../icons";

export type LabelVariantColors = "grey" | "green" | "yellow" | "red";

export type Icon = "lock" | "hourglass";

interface Props {
  children?: ReactNode;
  dataTestId?: string;
  icon?: Icon;
  showLock?: boolean;
  variant?: LabelVariantColors;
}

export function Label({
  children,
  dataTestId,
  icon,
  showLock = false,
  variant = "grey",
}: Props): React.ReactElement {
  return (
    <span className={classnames(styles.base, styles.variant[variant])} data-testid={dataTestId}>
      {(icon === "lock" || showLock) && (
        <LockIcon height={12} width={12} className={styles.icon} fill="currentColor" />
      )}
      {icon === "hourglass" && !showLock && (
        <HourglassIcon height={12} width={12} className={styles.icon} fill="currentColor" />
      )}
      {children}
    </span>
  );
}
