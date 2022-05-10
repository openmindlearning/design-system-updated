import { ReactElement } from "react";
interface Props {
    className?: string;
    onClick?: () => void;
    isSelected: boolean;
    variant?: "small" | "medium";
}
export declare const RadioButton: ({ className, onClick, isSelected, variant, }: Props) => ReactElement;
export {};
