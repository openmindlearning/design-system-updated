import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnstyledLink } from "./UnstyledLink";
import { Logo } from "../Logo";

export default {
  title: "Design System / UnstyledLink",
  component: UnstyledLink,
} as ComponentMeta<typeof UnstyledLink>;

const Template: ComponentStory<typeof UnstyledLink> = (args) => <UnstyledLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "#",
  external: false,
  children: "Test Unstyled Link",
};
export const LogoWithLink = Template.bind({});
LogoWithLink.args = {
  external: true,
  url: "#",
  accessibilityLabel: "Studio Logo",
  children: <Logo></Logo>,
  onClick: () => {
    alert("Hello from Studio!");
  },
};
