import React from "react";

import * as styles from "./ExperienceCard.css";

import { CircleCheckIcon } from "../../icons";
import { ClickableContentWrapper } from "../ClickableContentWrapper";

interface Props {
  title: string;
  thumbnailURL: string;
  progressIndicator: React.ReactNode;
  instructorName?: string;
  subtitle?: string;
  onClick?: () => void;
}

const InstructorName = ({ name }: { name: string }): React.ReactElement => {
  return (
    <span className={styles.instructorLabel}>
      <h3 className={styles.instructorText}>{name}</h3>
      <CircleCheckIcon width={18} height={18} />
    </span>
  );
};

export const ExperienceCard = ({
  title,
  thumbnailURL,
  progressIndicator,
  instructorName,
  subtitle,
  onClick,
}: Props): React.ReactElement => {
  return (
    <ClickableContentWrapper className={styles.container} onClick={onClick}>
      <div className={styles.card}>
        <img src={thumbnailURL} className={styles.thumbnail} />
        <div className={styles.metadata}>
          <div className={styles.labelContainer}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.instructorAndSubtitle}>
              {instructorName && <InstructorName name={instructorName} />}
              {subtitle && <h3 className={styles.subtitle}>{subtitle.toUpperCase()}</h3>}
            </div>
          </div>
          <div className={styles.progress}>{progressIndicator}</div>
        </div>
      </div>
    </ClickableContentWrapper>
  );
};
