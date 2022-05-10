import React from "react";
import { Button } from "../../components";
import { ThemeType, useTheme } from "../../themes";

export const ToggleThemeButton = (): React.ReactElement => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  };
  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};
