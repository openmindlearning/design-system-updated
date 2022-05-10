import React from "react";
import { ThemeType } from "./index.css";
export declare type ThemeContextType = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};
export declare const ThemeContext: React.Context<ThemeContextType>;
export declare const ThemeWrapper: React.FC<{
    theme: ThemeType;
}>;
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeType;
}
export declare const ThemeProvider: ({ children, defaultTheme }: ThemeProviderProps) => JSX.Element;
export declare const useTheme: () => ThemeContextType;
