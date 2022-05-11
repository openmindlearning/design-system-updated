import React, { ReactElement, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";
import { LockIcon, SaveIcon } from "../../icons";

export default {
  title: "Design System/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    {
      value: "Lock",
      label: (
        <div>
          lock
          <LockIcon />
        </div>
      ),
    },
    {
      value: "Save",
      label: (
        <div>
          save
          <SaveIcon />
        </div>
      ),
    },
  ],
};
