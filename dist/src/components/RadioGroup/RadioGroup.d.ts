import React from "react";
import { RadioItemLabel, RadioItemValue } from "../RadioItem";
interface Props {
    /**
     *List of mutually exclusive, single select radio items to be provided by the RadioGroup. Label is the content presented to user, Value is the radio input value that can be submitted to a form
     */
    items: {
        label: RadioItemLabel;
        value: RadioItemValue;
    }[];
    className?: string;
}
export declare function RadioGroup({ items, className }: Props): React.ReactElement;
export {};
