import * as styles from "./SpacingPreview.css";

import { spacing, spacingPx } from "../../tokens";

type SpacingToken = keyof typeof spacing;

export const SpacingPreview = () => {
  const tokens = Object.keys(spacing) as SpacingToken[];

  return (
    <div className={styles.container}>
      {tokens.map((token) => {
        const remValue = spacing[token];
        const pxValue = spacingPx[remValue as keyof typeof spacingPx];

        return (
          <div className={styles.token}>
            <div className={styles.nameAndValueContainer}>
              <div className={styles.name}>{token}</div>
              <div className={styles.value}>
                {remValue} / {pxValue}
              </div>
            </div>
            <div className={styles.display[token]}></div>
          </div>
        );
      })}
    </div>
  );
};
