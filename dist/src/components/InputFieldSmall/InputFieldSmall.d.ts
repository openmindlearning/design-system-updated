import React from "react";
interface Props extends React.HTMLProps<HTMLInputElement> {
    icon?: React.ReactElement;
    label?: string;
    showErrorOutline?: boolean;
    errorMessage?: string;
    className?: string;
    maxLength: number;
    dataTestId?: string;
    inputId: string;
    textType?: "default" | "muted";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const InputFieldSmall: ({ icon, label, errorMessage, showErrorOutline, className, maxLength, dataTestId, inputId, autoComplete, onChange, textType, ...inputProps }: Props) => React.ReactElement;
export {};
