import React, { ReactNode } from "react";

import classnames from "classnames";
import * as styles from "./Label.css";
import { IconVariant } from "../../icons/Icon/constants";
import { Icon } from "../../icons/Icon";

export type LabelVariantColors =
  | "grey"
  | "green"
  | "yellow"
  | "red"
  | "black"
  | "primaryYellow"
  | "platinum";

export type LabelVariantSizes = "small" | "medium" | "large";

interface Props {
  children?: ReactNode;
  dataTestId?: string;
  icon?: IconVariant;
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
          <Icon
            variant={IconVariant.Lock}
            height={iconSizes[size]}
            width={iconSizes[size]}
            className={styles.icon}
            fill="currentColor"
          />
        )
      }
      {icon && icon !== "lock" && (
        <Icon
          variant={icon}
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
