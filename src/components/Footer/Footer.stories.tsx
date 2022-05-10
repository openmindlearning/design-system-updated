import * as styles from "./Footer.stories.css";

import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";

import { Footer } from "./Footer";
import { Logo } from "../Logo";
import { Button } from "../Button";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Generic footer. Can be passed a ReactElement as a child. The children passed will be displayed flex and centered.",
      },
    },
  },
} as ComponentMeta<typeof Footer>;

export const WithLogo = (): ReactElement => (
  <Footer>
    <Logo theme="dark" />
  </Footer>
);

export const WithTwoButtons = (): ReactElement => (
  <Footer>
    <div>
      <Button onClick={() => console.log("Clicked button 1")}>Button 1</Button>
      <Button onClick={() => console.log("Clicked button 2")}>Button 2</Button>
    </div>
  </Footer>
);
