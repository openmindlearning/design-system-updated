import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";

import { ActionMenu } from "./ActionMenu";
import { Option } from "./Option";
import { Button } from "../Button";

export default {
  title: "Design System/Action Menu",
  component: ActionMenu,
} as ComponentMeta<typeof ActionMenu>;

export const Default = (): ReactElement => {
  const onClick = () => {};
  return (
    <ActionMenu>
      <Option onClick={onClick}>
        <span>any child label</span>
      </Option>
      <Option onClick={onClick}>
        <span>any second label</span>
      </Option>
    </ActionMenu>
  );
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
      </ActionMenu>
    </div>
  );
};
