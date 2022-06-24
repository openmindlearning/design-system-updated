import React from "react";

import * as styles from "./ProgressBar.css";

export const ProgressBar = ({
  displayPercentageText,
  percentage,
  width,
}: {
  displayPercentageText: boolean;
  // Number between 0 and 100
  percentage: number;
  width?: string;
}): React.ReactElement => {
  const percentageString = `${percentage}%`;

  return (
    <div className={styles.container} style={{ width }}>
      <div className={styles.barToFill}>
        <div className={styles.barFill} style={{ width: percentageString }}></div>
      </div>
      {displayPercentageText && <div className={styles.percentageText}>{percentageString}</div>}
    </div>
  );
};
