import * as styles from "./SelectionCard.css";

import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * A basic card component with a default box shadow and rounded corners.
 */
export const SelectionCard = ({ className, children }: Props): React.ReactElement => {
  return <div className={classNames(styles.selectionCard, className)}>{children}</div>;
};
