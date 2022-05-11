import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LogCard } from "./LogCard";
import { ActionMenu } from "../ActionMenu";
import { Option } from "../ActionMenu/Option";

export default {
  title: "Design System / LogCard",
  component: LogCard,
} as ComponentMeta<typeof LogCard>;

const Template: ComponentStory<typeof LogCard> = (args) => <LogCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelVariant: "green",
  labelText: "a label",
  title: "a title",
  text: "a text",
  mediaElement: (
    <img
      style={{ width: "100px", height: "100px", borderRadius: "8px" }}
      src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
    />
  ),
  reflectionsElement: <p>This cat is just very cute and fluffy</p>,
};

export const WithMedia = Template.bind({});
WithMedia.args = {
  labelVariant: "green",
  labelText: "a label",
  title: "a title",
  text: "a text",
  mediaElement: (
    <img
      style={{ width: "100px", height: "100px", borderRadius: "8px" }}
      src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
    />
  ),
};

export const WithReflection = Template.bind({});
WithReflection.args = {
  labelVariant: "green",
  labelText: "a label",
  title: "a title",
  text: "a text",
  reflectionsElement: <p>This cat is just very cute and fluffy</p>,
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  labelVariant: "green",
  labelText: "a label",
  title: "a title",
  text: "a text",
  actionDropdownElement: (
    <ActionMenu>
      <Option onClick={() => {}}>
        <span>any child label</span>
      </Option>
      <Option onClick={() => {}}>
        <span>any second label</span>
      </Option>
    </ActionMenu>
  ),
};
