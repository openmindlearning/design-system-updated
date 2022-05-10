import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TermsAndPrivacyDisclaimer } from "./TermsAndPrivacyDisclaimer";

export default {
  title: "Design System/TermsAndPrivacyDisclaimer",
  component: TermsAndPrivacyDisclaimer,
} as ComponentMeta<typeof TermsAndPrivacyDisclaimer>;

const Template: ComponentStory<typeof TermsAndPrivacyDisclaimer> = (args) => (
  <TermsAndPrivacyDisclaimer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
