import React from "react";
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
export declare const TextArea: ({ className, label, rows, errorMessage, characterLimit, onChange, ...cleanProps }: Props) => React.ReactElement;
export {};
