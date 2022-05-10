import { ReactElement } from "react";
/**
 * The text linking to our terms and privacy policy, stating one's agreement to them
 */
interface Props {
    preface?: string;
}
export declare const ACCESSIBILITY_LABELS: {
    TERMS: string;
    PRIVACY: string;
};
export declare const TermsAndPrivacyDisclaimer: ({ preface, }: Props) => ReactElement;
export {};
