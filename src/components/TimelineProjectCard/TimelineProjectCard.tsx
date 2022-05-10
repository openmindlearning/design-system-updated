import * as styles from "./TimelineProjectCard.css";

import React, { ReactElement, ReactNode } from "react";
import { pluralize } from "../../util";
import { ClapIcon, LoveIcon, WowIcon } from "../../icons";

export const TEST_LABELS = {
  TIMELINE_PROJECT_CARD: "timeline_project_card",
};

interface Props {
  project: {
    type: string;
    label: string;
    title: string;
    description: string;
  };
  attention: {
    numReactions: number;
    numComments: number;
  };
  mediaSlot?: ReactNode;
  onClick: () => void;
}

export const TimelineProjectCard = ({
  project: { type, label, title, description },
  attention: { numReactions, numComments },
  mediaSlot,
  onClick = () => ({}),
}: Props): ReactElement => {
  const reactionsText = `${numReactions} ${pluralize(numReactions, "reaction", "reactions")}`;
  const commentsText = `${numComments} ${pluralize(numComments, "comment", "comments")}`;

  return (
    <div
      data-testid={TEST_LABELS.TIMELINE_PROJECT_CARD}
      className={styles.outerContainer}
      {...{ onClick }}
    >
      <div className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.titleLabelContainer}>
            <div className={styles.type}>{type}</div>
            <div className={styles.labelContainer}>
              <div className={styles.label} title={label}>
                {label}
              </div>
            </div>
          </div>
          <div className={styles.titleDescriptionContainer}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>

          <div className={styles.attentionContainer}>
            <WowIcon width={16} height={16} className={styles.reactionIcon} />
            <LoveIcon width={16} height={16} className={styles.reactionIcon} />
            <ClapIcon width={16} height={16} className={styles.reactionIcon} />
            <div
              className={styles.reactionsCommentsContainer}
              title={`${reactionsText} · ${commentsText}`}
            >
              {reactionsText}
              <span className={styles.dotSeparator}>·</span>
              {commentsText}
            </div>
          </div>
        </div>

        {mediaSlot && <div className={styles.mediaSlot}>{mediaSlot}</div>}
      </div>
    </div>
  );
};
