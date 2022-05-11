import React, { ReactNode } from "react";
declare type Props = {
    children?: ReactNode;
    className?: string;
    variant?: "default" | "selected";
};
export declare const Tag: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
