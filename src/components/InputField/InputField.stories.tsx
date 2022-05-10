import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InputField } from "./InputField";

export default {
  title: "Common/InputField",
  component: InputField,
  argTypes: {
    disabled: {
      description: "HTML `disabled` prop. Applies disabled styles.",
    },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasError: false,
  disabled: false,
};
