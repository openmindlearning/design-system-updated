import React from "react";
export interface Props {
    /**
     * Value for the href
     */
    url?: string;
    /**
     * Indicate if the link goes to an external page
     */
    external?: boolean;
    /**
     * Accessibility text for the link
     */
    accessibilityLabel: string;
    /**
     * Link content
     */
    children: React.ReactNode;
    className?: string;
    /**
     * A callback for when the link is clicked
     */
    onClick?(): void;
}
export declare function UnstyledLink({ url, external, children, className, onClick, accessibilityLabel, }: Props): React.ReactElement;
