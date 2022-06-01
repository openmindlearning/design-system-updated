import React, { ReactElement, useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { Tab, Tabs } from "./Tabs";

export default {
  title: "Design System/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default = (): ReactElement => {
  const tabs = [
    { title: "In Progress", value: "foo" },
    { title: "Previous", value: "bar" },
  ];
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return <Tabs tabs={tabs} selection={selectedTab} setSelection={setSelectedTab} />;
};
