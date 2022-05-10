import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";

import { Header } from "./Header";
import { Button } from "../Button";
import { Logo } from "../Logo";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header with logo on the left. Children, if provided, are displayed on the right.",
      },
    },
  },
} as ComponentMeta<typeof Header>;

export const Empty = (): ReactElement => <Header />;

export const WithButton = (): ReactElement => (
  <Header logoComponent={<Logo />}>
    <div>
      <Button variant="secondary" onClick={() => console.log("Clicked button")}>
        Log in
      </Button>{" "}
    </div>
  </Header>
);

export const WithTwoButtons = (): ReactElement => (
  <Header logoComponent={<Logo />}>
    <div>
      <Button variant="secondary" onClick={() => console.log("Clicked explore classes")}>
        Explore classes
      </Button>
      <Button variant="secondary" onClick={() => console.log("Clicked log in")}>
        Log in
      </Button>{" "}
    </div>
  </Header>
);
