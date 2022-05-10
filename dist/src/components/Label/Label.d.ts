import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    dataTestId?: string;
    showLock?: boolean;
    variant?: "grey" | "green" | "yellow" | "red";
}
export declare function Label({ children, dataTestId, showLock, variant, }: Props): React.ReactElement;
export {};
