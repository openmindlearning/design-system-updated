import * as styles from "./BreadCrumb.css";

import React from "react";
import { CircleCheckIcon } from "../../icons";
import { theme } from "../../themes";

interface Props {
  label: string;
  index: number;
  activeIndex: number;
}

export const BreadCrumb = ({ label, index, activeIndex }: Props): React.ReactElement => {
  const breadCrumbAlreadyPassed = (index: number, activeIndex: number) => index < activeIndex;
  const isActive = (index: number, activeIndex: number) => index === activeIndex;
  const DIAMETER = 18;

  return (
    <div className={styles.breadcrumb}>
      {breadCrumbAlreadyPassed(index, activeIndex) ? (
        <CircleCheckIcon
          fill={theme.colors.border.opaque}
          arrowColor={theme.colors.content.tertiary}
          height={DIAMETER}
          width={DIAMETER}
        />
      ) : (
        <div
          className={
            isActive(index, activeIndex)
              ? styles.numberVariants.active
              : styles.numberVariants.inactive
          }
        >
          {index + 1}
        </div>
      )}
      <div
        className={
          isActive(index, activeIndex)
            ? styles.labelVariants.primary
            : styles.labelVariants.secondary
        }
      >
        {label}
      </div>
    </div>
  );
};
