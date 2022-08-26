import React from "react";
import { theme } from "../../themes";

import * as styles from "./ProgressBar.css";

interface Props {
  displayPercentageText: boolean;
  // Number between 0 and 100
  percentage: number;
  width?: string;
  fillColor?: string;
  backgroundColor?: string;
}

export const ProgressBar = ({
  displayPercentageText,
  percentage,
  width,
  fillColor: customFillColor,
  backgroundColor = theme.colors.background.warm,
}: Props): React.ReactElement => {
  const percentageString = `${percentage}%`;
  const fillColor =
    customFillColor ||
    (percentage === 100 ? theme.colors.green["500"] : theme.colors.content.accentPrimary);

  return (
    <div className={styles.container} style={{ width }}>
      <div className={styles.barToFill} style={{ backgroundColor }}>
        <div
          className={styles.barFill}
          style={{ width: percentageString, backgroundColor: fillColor }}
        ></div>
      </div>
      {displayPercentageText && <div className={styles.percentageText}>{percentageString}</div>}
    </div>
  );
};
