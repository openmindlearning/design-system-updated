import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";

import { RadioButton } from "./RadioButton";

export default {
  title: "Example/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

export const SelectedMediumRadioButton = (): ReactElement => (
  <RadioButton isSelected={true} variant="medium" />
);

export const UnselectedRadioButton = (): ReactElement => <RadioButton isSelected={false} />;

export const SelectedRadioButton = (): ReactElement => <RadioButton isSelected={true} />;
