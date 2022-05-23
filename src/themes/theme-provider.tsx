import React, { useState, useCallback, createContext } from "react";
import { darkThemeClass, themeClass, ThemeType } from "./index.css";

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeType.light,
  setTheme: () => {
    console.error("ThemeContext is not initialized yet");
  },
});

// This component can be used when the theme is controlled by the parent of the component (vs global context)
export const ThemeWrapper: React.FC<{ theme: ThemeType; children: React.ReactNode }> = ({
  theme,
  children,
}) => <div className={theme === ThemeType.light ? themeClass : darkThemeClass}>{children}</div>;

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
}

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(defaultTheme ?? ThemeType.light);
  const setTheme = useCallback((theme: ThemeType) => {
    setCurrentTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setTheme }}>
      <ThemeWrapper theme={currentTheme}>{children}</ThemeWrapper>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
