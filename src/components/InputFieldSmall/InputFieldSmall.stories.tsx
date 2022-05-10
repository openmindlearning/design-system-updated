import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InputFieldSmall } from "./InputFieldSmall";
import { EyeClosedIcon } from "../../icons";

export default {
  title: "Design System/Input Field Small",
  component: InputFieldSmall,
  argTypes: {
    icon: {
      required: false,
    },
    label: { type: "string", required: "true" },
    errorMessage: {
      type: { name: "string", required: false },
    },
  },
} as ComponentMeta<typeof InputFieldSmall>;

const Template: ComponentStory<typeof InputFieldSmall> = (args) => <InputFieldSmall {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxLength: 50,
  inputId: "example",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <EyeClosedIcon />,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  errorMessage: "Only letters, no special characters",
  label: "First Name",
};
