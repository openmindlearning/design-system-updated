import React, { ReactElement, useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { LargeInput } from "./LargeInput";

export default {
  title: "Design System/Large Input",
  component: LargeInput,
} as ComponentMeta<typeof LargeInput>;

export const Default = (): ReactElement => {
  const [value, setValue] = useState<string>();

  return (
    <LargeInput
      placeholder="First Name"
      onChange={(e) => setValue(e.target.value)}
      {...{ value }}
    />
  );
};

export const Destructive = (): ReactElement => {
  const [value, setValue] = useState<string>("$@%!");

  return (
    <LargeInput
      placeholder="Phone Number"
      variant="error"
      onChange={(e) => setValue(e.target.value)}
      {...{ value }}
      errorMessage="Only letters, no special characters"
    />
  );
};

export const Password = (): ReactElement => {
  const [value, setValue] = useState<string>("password123");

  return (
    <LargeInput
      placeholder="Password"
      type="password"
      onChange={(e) => setValue(e.target.value)}
      {...{ value }}
    />
  );
};
