import * as styles from "./InputField.css";

import React from "react";
import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLInputElement> {
  /**
   * Applies error styles.
   */
  hasError?: boolean;
}

/**
Basic input component.

- Inherits props from HTML `input` element.
*/
export const InputField = ({ hasError = false, ...inputProps }: Props): React.ReactElement => {
  return (
    <input
      className={classNames(styles.inputField, hasError && styles.inputFieldError)}
      {...inputProps}
    />
  );
};
