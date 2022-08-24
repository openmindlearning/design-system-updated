import React, { ReactElement, useEffect, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ActionMenu } from "./ActionMenu";
import { Option } from "./Option";
import { Button } from "../Button";

export default {
  title: "Design System/Action Menu",
  component: ActionMenu,
} as ComponentMeta<typeof ActionMenu>;

const Template: ComponentStory<typeof ActionMenu> = (args) => {
  const onClick = () => {};
  return (
    <ActionMenu {...args}>
      <Option onClick={onClick}>
        <span>any child label</span>
      </Option>
      <Option onClick={onClick}>
        <span>any second label</span>
      </Option>
    </ActionMenu>
  );
};

export const Default = Template.bind({});
Default.args = {
  expandDirection: "right",
  defaultOpen: true,
  top: 0,
  left: 0,
  right: 0,
};

export const WithElementOverride = (): ReactElement => {
  const onClick = () => {};
  const elementOverride = <Button>Open Button Override</Button>;
  return (
    <ActionMenu openMenuElement={elementOverride}>
      <Option onClick={onClick}>
        <span>any child label</span>
      </Option>
      <Option onClick={onClick}>
        <span>any second label</span>
      </Option>
    </ActionMenu>
  );
};

export const LeftExpandDirection = (): ReactElement => {
  const onClick = () => {};
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <ActionMenu expandDirection="left">
        <Option onClick={onClick}>
          <span style={{ width: 100 }}>any child label</span>
        </Option>
        <Option onClick={onClick}>
          <span>any second label</span>
        </Option>
      </ActionMenu>
    </div>
  );
};

export const WithChangingPosition = (): ReactElement => {
  const onClick = () => {};
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsExpanded(true), 1000);
  }, []);
  return (
    <>
      <div style={{ width: "100%", height: isExpanded ? 100 : 0 }} />
      <ActionMenu>
        <Option onClick={onClick}>
          <span style={{ width: 100 }}>any child label</span>
        </Option>
        <Option onClick={onClick}>
          <span>any second label</span>
        </Option>
      </ActionMenu>
    </>
  );
};
