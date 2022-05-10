import * as styles from "./theming-example.css";

import React from "react";
import { ToggleThemeButton } from "./toggle-theme-button";
import { ThemeBox } from "./theme-box";
import { useTheme, themeClass, darkThemeClass, ThemeProvider, ThemeType } from "../../themes";

export const ThemingExample = (): React.ReactElement => {
  const { theme } = useTheme();
  return (
    <div className={styles.themeExampleContainer}>
      <div className={styles.exampleHeading}>Parent Theme: {theme}</div>
      <ToggleThemeButton />
      <ThemeBox />

      <div className={styles.exampleHeading}>Override via className (bad): </div>
      <ThemeBox className={themeClass} />
      <ThemeBox className={darkThemeClass} />

      <div className={styles.exampleHeading}>Child ThemeProviders:</div>
      <ThemeProvider>
        <ThemeBox />
      </ThemeProvider>
      <ThemeProvider defaultTheme={ThemeType.dark}>
        <ThemeBox />
      </ThemeProvider>
    </div>
  );
};
