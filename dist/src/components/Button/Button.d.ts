import React, { ReactElement } from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
    Button Variants
    - Primary for primary actions.
    - Secondary for alternative actions.
    - Destructive meant for actions that may remove or change a resource.
    */
    variant?: "primary" | "secondary" | "destructive" | "transparent";
    buttonSize?: "small" | "medium" | "large";
    onClick?: () => void;
    /**
     * Apply a loading state to the button
     * applies a spinner to indicate that
     * the result of the button click is loading
     */
    isLoading?: boolean;
    disabled?: boolean;
    accessibilityLabel?: string;
    children: React.ReactNode;
}
export declare const Button: ({ variant, buttonSize, isLoading, disabled, children, onClick, className, accessibilityLabel, ...htmlButtonProps }: Props) => ReactElement;
export {};
