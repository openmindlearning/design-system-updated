import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Submit",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Action",
  variant: "secondary",
};

export const Large = Template.bind({});
Large.args = {
  buttonSize: "large",
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  buttonSize: "medium",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  buttonSize: "small",
  children: "Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: "Delete",
  variant: "destructive",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "primary",
  children: "Submit",
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonSize: "large",
  variant: "primary",
  children: "disabled",
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: "Secondary",
  variant: "secondary",
  disabled: true,
};

export const DestructiveDisabled = Template.bind({});
DestructiveDisabled.args = {
  children: "Delete",
  variant: "destructive",
  disabled: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  buttonSize: "medium",
  variant: "transparent",
  children: "Transparent",
};
