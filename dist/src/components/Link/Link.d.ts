import React from "react";
import { Props as UnstyledLinkProps } from "../UnstyledLink";
interface Props extends UnstyledLinkProps {
    underline?: boolean;
}
export declare function Link({ url, children, underline, onClick, accessibilityLabel, external, className, }: Props): React.ReactElement;
export {};
