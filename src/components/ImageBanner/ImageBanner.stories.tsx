import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ImageBanner } from "./ImageBanner";

export default {
  title: "Common/ImageBanner",
  component: ImageBanner,
} as ComponentMeta<typeof ImageBanner>;

export const Default = () => (
  <ImageBanner
    src="https://res.cloudinary.com/monthly/image/upload/v1647823627/monthly-admin-images/homepage/email-capture-banner.png"
    alt="Banner sample"
  />
);
