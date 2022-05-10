import React from "react";
interface Props extends React.HTMLProps<HTMLInputElement> {
    /**
     * Applies error styles.
     */
    hasError?: boolean;
}
/**
Basic input component.

- Inherits props from HTML `input` element.
*/
export declare const InputField: ({ hasError, ...inputProps }: Props) => React.ReactElement;
export {};
