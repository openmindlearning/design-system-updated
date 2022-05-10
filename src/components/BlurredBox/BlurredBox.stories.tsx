import * as styles from "./BlurredBox.stories.css";

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { BlurredBox } from "./BlurredBox";

export default {
  title: "Common/BlurredBox",
  component: BlurredBox,
} as ComponentMeta<typeof BlurredBox>;

export const Default = () => (
  <div className={styles.blurredBoxWrapper}>
    <BlurredBox className={styles.blurredBox}>Blurred box sample content</BlurredBox>
  </div>
);
