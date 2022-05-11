import React, { ChangeEventHandler, ReactElement } from "react";
interface Props {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void | ChangeEventHandler;
    isSelected: boolean;
    variant?: RadioButtonVariant;
}
export declare const RadioButton: ({ children, className, onClick, isSelected, variant, }: Props) => ReactElement;
export declare type RadioButtonVariant = "small" | "medium";
export {};
