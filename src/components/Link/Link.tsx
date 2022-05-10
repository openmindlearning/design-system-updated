import React from "react";

import classnames from "classnames";
import * as styles from "./Link.css";
import { UnstyledLink, Props as UnstyledLinkProps } from "../UnstyledLink";

interface Props extends UnstyledLinkProps {
  underline?: boolean;
}

export function Link({
  url,
  children,
  underline = false,
  onClick,
  accessibilityLabel,
  external = false,
  className,
}: Props): React.ReactElement {
  return (
    <UnstyledLink
      className={classnames([
        styles.baseLink,
        underline ? styles.linkVariant["underline"] : styles.linkVariant["noUnderline"],
        className,
      ])}
      {...{ onClick, external, url, accessibilityLabel }}
    >
      {children}
    </UnstyledLink>
  );
}
