import React, { ReactNode } from "react";

import classnames from "classnames";
import * as styles from "./Label.css";

import { LockIcon, HourglassIcon, SparkIcon, StudioIcon } from "../../icons";

export type LabelVariantColors =
  | "grey"
  | "green"
  | "yellow"
  | "red"
  | "black"
  | "primaryYellow"
  | "platinum";

export type LabelVariantSizes = "small" | "medium" | "large";

export type Icon = "lock" | "hourglass" | "studio" | "spark";

interface Props {
  children?: ReactNode;
  dataTestId?: string;
  icon?: Icon;
  /**
   * DEPRECATED: use icon="lock" to make a lock appear instead.
   * @deprecated use icon="lock" instead.
   */
  showLock?: boolean;
  variant?: LabelVariantColors;
  size?: LabelVariantSizes;
  classname?: string;
}

export function Label({
  children,
  dataTestId,
  icon,
  showLock = false,
  variant = "grey",
  size = "medium",
  classname,
}: Props): React.ReactElement {
  const iconSizes = {
    small: 10,
    medium: 12,
    large: 12,
  };

  const iconTypeToComponent: { [key in Icon]: React.ReactElement } = {
    lock: (
      <LockIcon
        height={iconSizes[size]}
        width={iconSizes[size]}
        className={styles.icon}
        fill="currentColor"
      />
    ),
    hourglass: (
      <HourglassIcon
        height={iconSizes[size]}
        width={iconSizes[size]}
        className={styles.icon}
        fill="currentColor"
      />
    ),
    spark: (
      <SparkIcon
        height={iconSizes[size]}
        width={iconSizes[size]}
        className={styles.icon}
        fill="currentColor"
      />
    ),
    studio: (
      <StudioIcon
        height={iconSizes[size]}
        width={iconSizes[size]}
        className={styles.icon}
        fill="currentColor"
      />
    ),
  };

  return (
    <span
      className={classnames(
        styles.base,
        styles.variant[variant],
        styles.sizeVariant[size],
        classname,
      )}
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
      {icon && icon !== "lock" && iconTypeToComponent[icon]}
      {children}
    </span>
  );
}
