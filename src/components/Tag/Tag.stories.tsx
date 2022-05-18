import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from "./Tag";

export default {
  title: "Design System / Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "button",
  children: "Music Production",
};

export const Selected = Template.bind({});
Selected.args = {
  variant: "selected",
  children: "Swimming",
};
