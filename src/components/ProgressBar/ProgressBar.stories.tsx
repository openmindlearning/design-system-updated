import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";
import { theme } from "../../themes";

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

export const FullyCompleted = Template.bind({});
FullyCompleted.args = {
  displayPercentageText: true,
  percentage: 100,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  displayPercentageText: true,
  percentage: 60,
  fillColor: theme.colors.content.success,
  backgroundColor: theme.colors.grey[100],
};
