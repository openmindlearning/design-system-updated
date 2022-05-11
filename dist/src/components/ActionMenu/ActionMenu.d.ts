import React, { ReactElement } from "react";
interface Props {
    children: React.ReactNode;
    openMenuElement?: React.ReactElement;
    defaultOpen?: boolean;
}
export declare const ACTION_MENU_OPEN_MENU_ELEMENT_LABEL = "action-menu-open-menu-element-label";
export declare const ACTION_MENU_OPEN_LABEL = "action-menu-open-label";
export declare const ActionMenu: ({ children, openMenuElement, defaultOpen, }: Props) => React.ReactElement;
export {};
