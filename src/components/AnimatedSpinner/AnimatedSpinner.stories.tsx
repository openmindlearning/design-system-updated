import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";

import { AnimatedSpinner } from "./AnimatedSpinner";

export default {
  title: "Design System/Animated Spinner",
  component: AnimatedSpinner,
  parameters: {
    docs: {
      description: {
        component: "SVG Spinner used to indicate loading states",
      },
    },
    background: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof AnimatedSpinner>;

export const Example = (): ReactElement => <AnimatedSpinner></AnimatedSpinner>;
