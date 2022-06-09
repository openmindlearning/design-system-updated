import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from "./Label";

export default {
  title: "Design System / Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is text",
  variant: "grey",
  showLock: false,
};

export const Grey = Template.bind({});
Grey.args = {
  children: "This is text",
  variant: "grey",
};

export const Green = Template.bind({});
Green.args = {
  children: "This is text",
  variant: "green",
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: "This is text",
  variant: "yellow",
};

export const Red = Template.bind({});
Red.args = {
  children: "This is text",
  variant: "red",
};

export const Black = Template.bind({});
Black.args = {
  children: "This is text",
  variant: "black",
};

export const PrimaryYellow = Template.bind({});
PrimaryYellow.args = {
  children: "This is text",
  variant: "primaryYellow",
};

export const Platinum = Template.bind({});
Platinum.args = {
  children: "This is text",
  variant: "platinum",
};

export const StudioIcon = Template.bind({});
StudioIcon.args = {
  children: "This is text",
  variant: "grey",
  icon: "studio",
};

export const SparkIcon = Template.bind({});
SparkIcon.args = {
  children: "This is text",
  variant: "primaryYellow",
  icon: "spark",
};
