import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TruncatedTags } from "./TruncatedTags";

export default {
  title: "Design System / TruncatedTags",
  component: TruncatedTags,
} as ComponentMeta<typeof TruncatedTags>;

const Template: ComponentStory<typeof TruncatedTags> = (args) => <TruncatedTags {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxRows: 2,
  maxTags: Infinity,
  tags: [
    "Singing",
    "Music Production",
    "Piano",
    "Baking",
    "Art",
    "Dancing",
    "Engineering",
    "Shoe Design",
    "Knitting",
    "Biking",
    "Welding",
    "Carpentry",
    "Tattoo Design",
    "Gardening",
    "Camping",
    "Basketball",
    "Skateboarding",
    "Traveling",
    "Composting",
    "Kayaking",
    "Powerlifting",
    "Slacklining",
    "Hiking",
  ],
  popperOptions: {
    placement: "right-start",
    modifiers: [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 16],
        },
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: ["bottom"],
        },
      },
    ],
  },
  popoverZIndex: "auto",
};
