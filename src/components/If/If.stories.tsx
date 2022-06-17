import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { If } from "./If";
import { Button } from "../Button";

export default {
  title: "Utility/If",
  component: If,
} as ComponentMeta<typeof If>;

const Template: ComponentStory<typeof If> = (args) => <If {...args} />;

export const Default = Template.bind({});
Default.args = {
  condition: true,
  children: <Button>Button</Button>,
};
