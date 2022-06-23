import React from "react";

import * as styles from "./ProgressBar.css";

export const ProgressBar = ({
  displayPercentageText,
  percentage,
  barWidth,
}: {
  displayPercentageText: boolean;
  // Number between 0 and 100
  percentage: number;
  barWidth?: string;
}): React.ReactElement => {
  const percentageString = `${percentage}%`;

  return (
    <div className={styles.container} style={{ width: barWidth }}>
      <div className={styles.barToFill}>
        <div className={styles.barFill} style={{ width: percentageString }}></div>
      </div>
      {displayPercentageText && <div className={styles.percentageText}>{percentageString}</div>}
    </div>
  );
};
