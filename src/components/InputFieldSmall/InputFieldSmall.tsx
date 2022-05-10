import * as styles from "./InputFieldSmall.css";

import React, { useState } from "react";
import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLInputElement> {
  icon?: React.ReactElement;
  label?: string;
  showErrorOutline?: boolean;
  errorMessage?: string;
  className?: string;
  maxLength: number;
  dataTestId?: string;
  inputId: string;
  textType?: "default" | "muted";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFieldSmall = ({
  icon,
  label,
  errorMessage,
  showErrorOutline,
  className,
  maxLength,
  dataTestId,
  inputId,
  autoComplete,
  onChange,
  textType = "default",
  ...inputProps
}: Props): React.ReactElement => {
  const [characterCount, setCharacterCount] = useState<number>(0);

  return (
    <div className={styles.container}>
      {label && (
        <label
          className={
            characterCount === 0 && (errorMessage || showErrorOutline)
              ? styles.label["error"]
              : styles.label["primary"]
          }
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <div className={styles.innerContainer}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <input
          data-testid={dataTestId}
          className={classNames(
            className,
            icon ? styles.input["withIcon"] : styles.input["default"],
            characterCount === 0 && (errorMessage || showErrorOutline)
              ? styles.inputBorder["error"]
              : styles.inputBorder["default"],
            styles.text[textType],
          )}
          id={inputId}
          maxLength={maxLength}
          autoComplete={autoComplete}
          data-lpignore="true"
          onChange={(e) => {
            onChange(e);
            setCharacterCount(e.target.value.length);
          }}
          {...inputProps}
        />
      </div>
      {characterCount === 0 && (errorMessage || showErrorOutline) && (
        <div className={styles.errorText}>{errorMessage}</div>
      )}
    </div>
  );
};
