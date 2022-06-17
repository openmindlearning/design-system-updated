import * as styles from "./colors-preview.css";

import React from "react";
import { primaryColors, baseColors } from "../../tokens";

export const ColorsPreview = (): React.ReactElement => {
  /*
  since our colors objects are nested, we need to flatten 
  the object and its accessor keys
  eg:
  {
    grey: {
      50: "#cccccc"
    }
  }
  becomes
  {
    "grey.50": "#cccccc"
  }
  */
  const flatColors = flattenObject({ ...baseColors, ...primaryColors });
  return (
    <>
      {Object.keys(flatColors).map((colorKey) => {
        const colorValue = flatColors[colorKey];
        return (
          <div key={`color-${colorKey}`}>
            <div className={styles.colorValueRow}>
              <div className={styles.colorSwatch} style={{ backgroundColor: colorValue }} />
              <div className={styles.colorValueText}>
                {colorKey} - {colorValue}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const flattenObject = (obj: { [x: string]: string | object }) => {
  console.log({ obj });
  const result: { [x: string]: string } = {};

  for (const i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;

    if (typeof obj[i] == "object" && obj[i] !== null) {
      const flatObject = flattenObject(obj[i] as { [x: string]: object });
      for (const x in flatObject) {
        if (!Object.prototype.hasOwnProperty.call(flatObject, x)) continue;
        const flatKey = i + "." + x;
        result[flatKey] = flatObject[x];
      }
    } else {
      result[i] = obj[i] as string;
    }
  }
  return result;
};
