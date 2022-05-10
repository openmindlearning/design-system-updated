import * as styles from "./TermsAndPrivacyDisclaimer.css";

import React, { ReactElement } from "react";
import { Link } from "../Link";

/**
 * The text linking to our terms and privacy policy, stating one's agreement to them
 */

interface Props {
  preface?: string;
}

export const ACCESSIBILITY_LABELS = {
  TERMS: "Studio Terms",
  PRIVACY: "Studio Privacy Policy",
};

export const TermsAndPrivacyDisclaimer = ({
  preface = "By continuing, you agree to Studio's",
}: Props): ReactElement => (
  <div className={styles.disclaimer}>
    {preface}{" "}
    <Link
      url="https://studio.com/terms"
      className={styles.link}
      accessibilityLabel={ACCESSIBILITY_LABELS.TERMS}
      external
    >
      Terms
    </Link>{" "}
    and{" "}
    <Link
      url="https://studio.com/privacy"
      className={styles.link}
      accessibilityLabel={ACCESSIBILITY_LABELS.PRIVACY}
      external
    >
      Privacy Policy
    </Link>
  </div>
);
