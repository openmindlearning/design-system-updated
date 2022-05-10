import * as styles from "./BlurredBox.css";

import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * A box component that uses the `backdropFilter` property to blur its background.

- The `backdropFilter` property has imperfect browser support (see [caniuse](https://caniuse.com/css-backdrop-filter)).
 */
export const BlurredBox = ({ className, children }: Props): React.ReactElement => {
  return <div className={classNames(styles.blurredBox, className)}>{children}</div>;
};
