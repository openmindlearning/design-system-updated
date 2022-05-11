import React from "react";
import { RadioButton, RadioButtonVariant } from "../RadioButton";
import * as styles from "./RadioItem.css";

export type RadioItemLabel = React.ReactNode;
export type RadioItemValue = string;
interface Props {
  /**
   * Label for the radio item
   */
  children: RadioItemLabel;
  /**
   * Form value of the radio item
   */
  value: RadioItemValue;
  /**
   * Controls the "checked" field of the input
   */
  isSelected: boolean;
  /**
   * Function that controls on change behaviour of the radio item. Default function passed in by Radio Group.
   */
  onChange: React.ChangeEventHandler;
  sizeVariant?: RadioButtonVariant;
}

export function RadioItem({
  children,
  value,
  isSelected,
  onChange,
  sizeVariant = "medium",
}: Props): React.ReactElement {
  function handleChange(currentTarget: React.ChangeEvent) {
    onChange && onChange(currentTarget);
  }
  return (
    <label className={styles.radioItem} htmlFor={value}>
      <RadioButton isSelected={isSelected} variant={sizeVariant}>
        <input
          type="radio"
          name={value}
          value={value}
          id={value}
          className={styles.input}
          onChange={handleChange}
          checked={isSelected}
        />
      </RadioButton>
      <span className={styles.label}>{children}</span>
    </label>
  );
}
