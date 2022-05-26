import React from "react";

import * as styles from "./LogCard.css";
import { Label, LabelVariantColors } from "../Label";

interface Props {
  actionDropdownElement?: React.ReactNode;
  labelVariant?: LabelVariantColors;
  labelText?: string;
  mediaElement?: React.ReactNode;
  reflectionsElement?: React.ReactNode;
  title: string;
  text: string;
}

export const LOG_CARD_TEXT = "log-card-text";
export const LOG_CARD_LABEL = "log-card-label";
export const LOG_CARD = "log-card";
export const LOG_CARD_REFLECTIONS = "log-card-reflections";
export const LOG_MEDIA = "log-card-media";
export const LOG_DROPDOWN = "log-card-dropdown";

export function LogCard({
  actionDropdownElement,
  labelText,
  labelVariant = "green",
  mediaElement,
  reflectionsElement,
  text,
  title,
}: Props): React.ReactElement {
  return (
    <article className={styles.container} data-testid={LOG_CARD}>
      <div className={styles.innerContainer}>
        <div className={styles.labelAndText}>
          <div className={styles.titleAndLabelRow}>
            <span className={styles.title}>{title}</span>
            {labelText && (
              <Label variant={labelVariant} dataTestId={LOG_CARD_LABEL} classname={styles.label}>
                {labelText}
              </Label>
            )}
            {actionDropdownElement && (
              <div className={styles.dropdown} data-testid={LOG_DROPDOWN}>
                {actionDropdownElement}
              </div>
            )}
          </div>
          <div className={styles.body} data-testid={LOG_CARD_TEXT}>
            {text}
          </div>
        </div>
        {mediaElement && (
          <span className={styles.media} data-testid={LOG_MEDIA}>
            {mediaElement}
          </span>
        )}
      </div>
      {reflectionsElement && (
        <div data-testid={LOG_CARD_REFLECTIONS} className={styles.reflectionsTextContainer}>
          <div className={styles.richTextContainer}>{reflectionsElement}</div>
        </div>
      )}
    </article>
  );
}
