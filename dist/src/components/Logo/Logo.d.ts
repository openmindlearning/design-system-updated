import { ReactElement } from "react";
declare type Size = "small" | "medium" | "large";
declare type Theme = "light" | "dark";
interface Props {
    /**
     * Size variants
     * - small
     * - medium
     * - large
     * */
    size?: Size;
    /**
     * Theme variants
     * - light
     * - dark
     * */
    theme?: Theme;
}
export declare const Logo: ({ size, theme }: Props) => ReactElement;
export {};
