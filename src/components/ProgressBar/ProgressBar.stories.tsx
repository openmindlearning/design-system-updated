import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

export default {
  title: "Design System / ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  displayPercentageText: true,
  percentage: 10,
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  displayPercentageText: true,
  percentage: 45,
  width: "200px",
};
