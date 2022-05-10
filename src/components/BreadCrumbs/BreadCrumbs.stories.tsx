import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BreadCrumbs } from "./BreadCrumbs";

const breadcrumbs = ["Select Class", "Plans", "Checkout"];

export default {
  title: "Common/BreadCrumbs",
  component: BreadCrumbs,
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} />;

export const Primary = Template.bind({});
Primary.args = { breadCrumbs: breadcrumbs, activeIndex: 1 };
