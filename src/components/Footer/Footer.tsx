import * as styles from "./Footer.css";

import React, { ReactElement } from "react";

interface Props {
  /**
   * The children occupy the full width of the header.
   */
  children?: ReactElement;
}

export const Footer = ({ children }: Props): ReactElement => {
  return <footer className={styles.container}>{children}</footer>;
};
