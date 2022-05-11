import * as styles from "./TextArea.css";
import React, { useState } from "react";
import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  placeholder?: string;
  label?: string;
  rows?: number;
  disabled?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Displays error message under text area,
   * if empty no error styling is shown
   */
  errorMessage?: string;
  /**
   * Displays character count under text area,
   * if empty no character count is shown
   */
  characterLimit?: number;
  /**
   * Sets character limit
   */
  maxLength?: number;
}

/**
 Basic input component.

 - Inherits props from HTML `textarea` element.
 */
export const TextArea = ({
  value,
  className,
  label,
  rows,
  errorMessage,
  characterLimit,
  onChange,
  ...cleanProps
}: Props): React.ReactElement => {
  const [characterCount, setCharacterCount] = useState<number>(value.length);

  return (
    <div className={styles.textAreaContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        value={value}
        className={classNames(
          styles.textArea,
          errorMessage && characterCount === 0 && styles.errorContainer,
          className && className,
        )}
        rows={rows || 3}
        onChange={(e) => {
          setCharacterCount(e.target.value.length);
          onChange(e);
        }}
        {...cleanProps}
      />
      <div
        className={
          errorMessage && characterCount === 0
            ? styles.multiTextContainer
            : styles.singleTextContainer
        }
      >
        {errorMessage && characterCount === 0 && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
        {characterLimit && (
          <div
            className={
              errorMessage && characterCount === 0
                ? styles.characterLimit["error"]
                : styles.characterLimit["primary"]
            }
          >
            {characterCount}/{characterLimit}
          </div>
        )}
      </div>
    </div>
  );
};
