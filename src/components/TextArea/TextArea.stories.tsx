import React, { ReactElement, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextArea } from "./TextArea";

export default {
  title: "Design System/Text Area",
  component: TextArea,
  argTypes: {
    errorMessage: {
      type: { name: "string", required: false },
    },
    characterLimit: {
      type: { name: "number", required: false },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind((): ReactElement => {
  const [value, setValue] = useState<string>("Hello, my name is Johnny Appleseed");
  return <TextArea onChange={(e) => setValue(e.target.value)} value={value} />;
});

Default.args = {
  placeholder:
    "Write a mini bio to introduce yourself.  I’m from Cancun Mexico and I love making things. I love to create to understand.",
  label: "Mini Bio",
  rows: 3,
};

export const Errored = Template.bind((): ReactElement => {
  const [value, setValue] = useState<string>("Hello, my name is Johnny Appleseed");
  return <TextArea onChange={(e) => setValue(e.target.value)} value={value} />;
});

Errored.args = {
  errorMessage: "Required",
  placeholder:
    "Write a mini bio to introduce yourself.  I’m from Cancun Mexico and I love making things. I love to understand to create to understand.",
  label: "Mini Bio",
  rows: 3,
  characterLimit: 100,
};
