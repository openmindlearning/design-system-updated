import * as styles from "./Header.css";

import React, { ReactElement, CSSProperties } from "react";

import classNames from "classnames";

interface Props {
  /**
   * The children will be added on the right side.
   * */
  children?: React.ReactChild | React.ReactChildren | React.ReactNode;

  /**
   * Allow the parent component to render our logo component
   * so it can control the Router Link, and other business
   * logic such as rendering Studio vs Studio Plus logos based on application state.
   */
  logoComponent?: React.ReactChild;

  className?: string;
  style?: CSSProperties;
}

export const Header = ({ children, logoComponent, className, style }: Props): ReactElement => {
  return (
    <header className={classNames(styles.header, className)} style={style}>
      {logoComponent}
      {children}
    </header>
  );
};
