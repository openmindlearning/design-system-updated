import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { Logo } from ".";

export default {
  title: "Example/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const DarkLogo = (): ReactElement => (
  <div style={{ backgroundColor: "black" }}>
    <Logo theme="dark" />
  </div>
);

export const DarkLogoMedium = (): ReactElement => (
  <div style={{ backgroundColor: "black" }}>
    <Logo theme="dark" size="medium" />
  </div>
);

export const DarkLogoSmall = (): ReactElement => (
  <div style={{ backgroundColor: "black" }}>
    <Logo theme="dark" size="small" />
  </div>
);

export const LightLogo = (): ReactElement => <Logo />;

export const LightLogoMedium = (): ReactElement => <Logo size="medium" />;

export const LightLogoSmall = (): ReactElement => <Logo size="small" />;
