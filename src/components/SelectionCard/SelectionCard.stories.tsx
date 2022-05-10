import * as styles from "./SelectionCard.stories.css";

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { SelectionCard } from "./SelectionCard";

export default {
  title: "Common/SelectionCard",
  component: SelectionCard,
} as ComponentMeta<typeof SelectionCard>;

export const Default = () => (
  <div className={styles.selectionCardWrapper}>
    <SelectionCard className={styles.selectionCardEx}>Selection Card Content</SelectionCard>
  </div>
);
