import React, { ReactNode } from "react";
export declare type LabelVariantColors = "grey" | "green" | "yellow" | "red";
interface Props {
    children?: ReactNode;
    dataTestId?: string;
    showLock?: boolean;
    variant?: LabelVariantColors;
}
export declare function Label({ children, dataTestId, showLock, variant, }: Props): React.ReactElement;
export {};
