import * as styles from "./TimelineProjectCard.stories.css";

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TimelineProjectCard } from "./TimelineProjectCard";

export default {
  title: "Design System / TimelineProjectCard",
  component: TimelineProjectCard,
} as ComponentMeta<typeof TimelineProjectCard>;

const Template: ComponentStory<typeof TimelineProjectCard> = (args) => (
  <TimelineProjectCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  project: {
    type: "Project 2B",
    label: "Sing Anything",
    title: "Love Song",
    description:
      "Ran out of air a lot today. Any feedback? I've been working on centering my self before I start singing.",
  },
  reactionCounts: {
    clap: 1,
    genius: 1,
  },
  mediaSlot: (
    <img
      src="https://res.cloudinary.com/monthly/image/upload/v1/monthly-admin-images/her-songwriting/instructor-card-her.jpg?_a=AJAEtWI0"
      className={styles.image}
    />
  ),
  onClick: () => {
    console.log("[onClick] TimelineProjectCard");
  },
};
