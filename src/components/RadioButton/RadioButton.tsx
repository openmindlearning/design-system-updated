import * as styles from "./RadioButton.css";

import React, { ChangeEventHandler, ReactElement } from "react";
import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void | ChangeEventHandler;
  isSelected: boolean;
  variant?: RadioButtonVariant;
}

export const RadioButton = ({
  children,
  className,
  onClick,
  isSelected,
  variant = "small",
}: Props): ReactElement => {
  return (
    <span
      className={classNames(
        styles.baseRadioButton,
        styles.radioButtonVariant[variant],
        isSelected && styles.radioButtonSelected,
        className,
      )}
      onClick={onClick}
    >
      <span className={styles.radioButtonWhiteCircle} />
      {children}
    </span>
  );
};

export type RadioButtonVariant = "small" | "medium";
