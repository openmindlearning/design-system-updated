import React from "react";
import { LabelVariantColors } from "../Label";
interface Props {
    actionDropdownElement?: React.ReactNode;
    labelVariant?: LabelVariantColors;
    labelText?: string;
    mediaElement?: React.ReactNode;
    reflectionsElement?: React.ReactNode;
    title: string;
    text: string;
}
export declare const LOG_CARD_TEXT = "log-card-text";
export declare const LOG_CARD_LABEL = "log-card-label";
export declare const LOG_CARD = "log-card";
export declare const LOG_CARD_REFLECTIONS = "log-card-reflections";
export declare const LOG_MEDIA = "log-card-media";
export declare const LOG_DROPDOWN = "log-card-dropdown";
export declare function LogCard({ actionDropdownElement, labelText, labelVariant, mediaElement, reflectionsElement, text, title, }: Props): React.ReactElement;
export {};
