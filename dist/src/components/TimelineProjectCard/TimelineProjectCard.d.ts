import { ReactElement, ReactNode } from "react";
export declare const TEST_LABELS: {
    TIMELINE_PROJECT_CARD: string;
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
export declare const TimelineProjectCard: ({ project: { type, label, title, description }, attention: { numReactions, numComments }, mediaSlot, onClick, }: Props) => ReactElement;
export {};
