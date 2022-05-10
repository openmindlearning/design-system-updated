import React, { CSSProperties, HTMLInputTypeAttribute } from "react";
export declare const SHOW_PASSWORD_ICON_LABEL = "show-password-icon";
interface Props {
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    infoMessage?: string;
    errorMessage?: string | boolean;
    shouldAutoFocus?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
    className?: string;
    style?: CSSProperties;
    value?: string;
    maxLength?: number;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    testLabel?: string;
    id?: string;
    /**
    Input Variants
    - default for default input states.
    - error for error input states.
    */
    variant?: "default" | "error";
}
export declare const LargeInput: ({ errorMessage, infoMessage, className, style, type, placeholder, value, shouldAutoFocus, onChange, maxLength, onKeyDown, autoComplete, autoFocus, testLabel, id, variant, }: Props) => React.ReactElement;
export {};
