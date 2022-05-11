import React, { ReactElement, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RadioItem } from "./RadioItem";

export default {
  title: "Design System/RadioItem",
  component: RadioItem,
} as ComponentMeta<typeof RadioItem>;

const Template: ComponentStory<typeof RadioItem> = (args) => <RadioItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Test",
  value: "test",
};
