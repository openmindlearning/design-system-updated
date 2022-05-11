import React from "react";
import { RadioButtonVariant } from "../RadioButton";
export declare type RadioItemLabel = React.ReactNode;
export declare type RadioItemValue = string;
interface Props {
    /**
     * Label for the radio item
     */
    children: RadioItemLabel;
    /**
     * Form value of the radio item
     */
    value: RadioItemValue;
    /**
     * Controls the "checked" field of the input
     */
    isSelected: boolean;
    /**
     * Function that controls on change behaviour of the radio item. Default function passed in by Radio Group.
     */
    onChange: React.ChangeEventHandler;
    sizeVariant?: RadioButtonVariant;
}
export declare function RadioItem({ children, value, isSelected, onChange, sizeVariant, }: Props): React.ReactElement;
export {};
