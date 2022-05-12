import * as styles from "./ImageBannerWithBlurredBox.stories.css";

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ImageBannerWithBlurredBox } from "./ImageBannerWithBlurredBox";

export default {
  title: "Common/ImageBannerWithBlurredBox",
  component: ImageBannerWithBlurredBox,
} as ComponentMeta<typeof ImageBannerWithBlurredBox>;

export const Default = () => (
  <ImageBannerWithBlurredBox
    src="https://res.cloudinary.com/monthly/image/upload/v1647823627/monthly-admin-images/homepage/email-capture-banner.png"
    alt="Banner with blurred box"
    blurredBoxClassName={styles.blurredBox}
  >
    Stop scrolling. Start making.
  </ImageBannerWithBlurredBox>
);
