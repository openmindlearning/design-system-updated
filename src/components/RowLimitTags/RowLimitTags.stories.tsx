import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RowLimitTags } from "./RowLimitTags";

export default {
  title: "Design System / RowLimitTags",
  component: RowLimitTags,
} as ComponentMeta<typeof RowLimitTags>;

const Template: ComponentStory<typeof RowLimitTags> = (args) => <RowLimitTags {...args} />;

export const Default = Template.bind({});
Default.args = {
  rowLimit: 3,
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
};
