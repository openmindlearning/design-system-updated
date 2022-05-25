import React, { ReactNode } from "react";

import classnames from "classnames";
import * as styles from "./Label.css";

import { LockIcon, HourglassIcon } from "../../icons";

export type LabelVariantColors = "grey" | "green" | "yellow" | "red";

export type LabelVariantSizes = "small" | "medium" | "large";

export type Icon = "lock" | "hourglass";

interface Props {
  children?: ReactNode;
  dataTestId?: string;
  icon?: Icon;
  showLock?: boolean;
  variant?: LabelVariantColors;
  size?: LabelVariantSizes;
}

export function Label({
  children,
  dataTestId,
  icon,
  /**
   * @deprecated use icon="lock" instead.
   */
  showLock = false,
  variant = "grey",
  size = "medium",
}: Props): React.ReactElement {
  const iconSizes = {
    small: 10,
    medium: 12,
    large: 12,
  };

  return (
    <span
      className={classnames(styles.base, styles.variant[variant], styles.sizeVariant[size])}
      data-testid={dataTestId}
    >
      {
        // showLock is deprecated: this condition is for backwards compatibility.
        (icon === "lock" || showLock) && (
          <LockIcon
            height={iconSizes[size]}
            width={iconSizes[size]}
            className={styles.icon}
            fill="currentColor"
          />
        )
      }
      {icon === "hourglass" && !showLock && (
        <HourglassIcon
          height={iconSizes[size]}
          width={iconSizes[size]}
          className={styles.icon}
          fill="currentColor"
        />
      )}
      {children}
    </span>
  );
}
