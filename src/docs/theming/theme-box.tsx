import * as styles from "./theme-box.css";

import React from "react";
import { ToggleThemeButton } from "./toggle-theme-button";

export interface ThemeBoxProps {
  className?: string;
}
export const ThemeBox = (props: ThemeBoxProps) => {
  return (
    <div className={`${styles.themeBoxContainer} ${props.className}`}>
      <div className={styles.headerText}>Sample Text</div>
      <div className={styles.sampleSquare} />
      <ToggleThemeButton />
    </div>
  );
};
