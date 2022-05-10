import React, { MutableRefObject } from "react";
interface Props {
    isOpen: boolean;
    onOutsideClick: () => void;
    exceptions: MutableRefObject<any>[];
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export declare const ClickOuterWrapper: (props: Props) => React.ReactElement;
export {};
