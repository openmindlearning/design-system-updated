import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "./Link";

export default {
  title: "Design System / Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "#",
  children: "Test Link",
};

export const Underline = Template.bind({});
Underline.args = {
  ...Default.args,
  underline: true,
};

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  ...Default.args,
  underline: false,
};
