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
      {Object.keys(flatColors).map((colorKey, index) => {
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

const flattenObject = (obj: any) => {
  const result: any = {};

  for (const i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if (typeof obj[i] == "object" && obj[i] !== null) {
      const flatObject = flattenObject(obj[i]);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        const flatKey = i + "." + x;
        result[flatKey] = flatObject[x];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};
