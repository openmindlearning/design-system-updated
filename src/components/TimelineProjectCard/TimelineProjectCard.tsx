import * as styles from "./TimelineProjectCard.css";

import React, { ReactElement, ReactNode } from "react";
import { pluralize } from "../../util";
import {
	ClapIcon,
	LightBulbIcon,
	LoveIcon,
	OneHundredIcon,
	WowIcon,
} from "../../icons";

export const TEST_LABELS = {
	TIMELINE_PROJECT_CARD: "timeline_project_card",
};

export interface ReactionCounts {
	comment?: number;
	like?: number;
	wow?: number;
	clap?: number;
	one_hundred?: number;
	genius?: number;
}

interface Props {
	project: {
		type: string;
		label: string;
		title: string;
		description: string;
	};
	reactionCounts: ReactionCounts;
	mediaSlot?: ReactNode;
	onClick: () => void;
}

export const TimelineProjectCard = ({
	project: { type, label, title, description },
	reactionCounts,
	mediaSlot,
	onClick = () => ({}),
}: Props): ReactElement => {
	const numReactions =
		(reactionCounts?.clap ?? 0) +
		(reactionCounts?.genius ?? 0) +
		(reactionCounts?.like ?? 0) +
		(reactionCounts?.one_hundred ?? 0) +
		(reactionCounts?.wow ?? 0);
	const numComments = 0; // TODO: backend still needs to return comment counts
	const reactionsText = `${numReactions} ${pluralize(
		numReactions,
		"reaction",
		"reactions"
	)}`;
	const commentsText = `${numComments} ${pluralize(
		numComments,
		"comment",
		"comments"
	)}`;

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
						{reactionCounts?.wow && (
							<WowIcon width={16} height={16} className={styles.reactionIcon} />
						)}
						{reactionCounts?.like && (
							<LoveIcon
								width={16}
								height={16}
								className={styles.reactionIcon}
							/>
						)}
						{reactionCounts?.clap && (
							<ClapIcon
								width={16}
								height={16}
								className={styles.reactionIcon}
							/>
						)}
						{reactionCounts?.genius && (
							<LightBulbIcon
								width={16}
								height={16}
								className={styles.reactionIcon}
							/>
						)}
						{reactionCounts?.one_hundred && (
							<OneHundredIcon
								width={16}
								height={16}
								className={styles.reactionIcon}
							/>
						)}
						<div
							className={styles.reactionsCommentsContainer}
							title={`${reactionsText} · ${commentsText}`}
						>
							{numReactions > 0 && reactionsText}
							{numComments > 0 && numReactions > 0 && (
								<span className={styles.dotSeparator}>·</span>
							)}
							{numComments > 0 && commentsText}
						</div>
					</div>
				</div>

				{mediaSlot && <div className={styles.mediaSlot}>{mediaSlot}</div>}
			</div>
		</div>
	);
};
