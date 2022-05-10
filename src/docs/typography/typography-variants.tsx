import React from "react";
import * as styles from "./typography-variants.css";

export const TypographyVariants = () => {
  return (
    <>
      <div className={styles.sectionHeading}>Display</div>
      <div className={styles.displayText.xxlarge}>Display XXLarge</div>
      <div className={styles.displayText.xlarge}>Display XLarge</div>
      <div className={styles.displayText.large}>Display Large</div>
      <div className={styles.displayText.medium}>Display Medium</div>

      <div className={styles.sectionHeading}>Header</div>
      <div className={styles.headerText.xlarge}>Header XLarge</div>
      <div className={styles.headerText.large}>Header Large</div>
      <div className={styles.headerText.medium}>Header Medium</div>
      <div className={styles.headerText.small}>Header Small</div>
      <div className={styles.headerText.xsmall}>Header XSmall</div>

      <div className={styles.sectionHeading}>Label</div>
      <div className={styles.labelText.xxlarge}>Label Large</div>
      <div className={styles.labelText.small}>Label Small</div>
      <div className={styles.labelText.xsmall}>Label XSmall</div>

      <div className={styles.sectionHeading}>Body</div>
      <div className={styles.bodyText.medium}>Body Medium</div>
      <div className={styles.bodyText.small}>Body Small</div>
      <div className={styles.bodyText.xsmall}>Body XSmall</div>

      <div className={styles.sectionHeading}>Custom - Italic</div>
      <div className={styles.italicText.medium}>Body Medium</div>
      <div className={styles.italicText.small}>Body Small</div>
      <div className={styles.italicText.xsmall}>Body XSmall</div>

      <div className={styles.sectionHeading}>Custom - Medium Weight</div>
      <div className={styles.mediumWeightText.medium}>Body Medium</div>
      <div className={styles.mediumWeightText.small}>Body Small</div>
      <div className={styles.mediumWeightText.xsmall}>Body XSmall</div>
    </>
  );
};
