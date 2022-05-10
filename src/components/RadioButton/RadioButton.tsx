import * as styles from "./RadioButton.css";

import React, { ReactElement } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  onClick?: () => void;
  isSelected: boolean;
  variant?: "small" | "medium";
}

export const RadioButton = ({
  className,
  onClick,
  isSelected,
  variant = "small",
}: Props): ReactElement => {
  return (
    <div
      className={classNames(
        styles.baseRadioButton,
        styles.radioButtonVariant[variant],
        isSelected && styles.radioButtonSelected,
        className,
      )}
      onClick={onClick}
    >
      <div className={styles.radioButtonWhiteCircle} />
    </div>
  );
};
