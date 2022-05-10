import * as styles from "./Images.stories.css";

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Title, Subtitle, Description, ArgsTable, Stories } from "@storybook/addon-docs";

import { Image } from "./Image";

export default {
  title: "Common/Image",
  component: Image,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ArgsTable />
          <Stories includePrimary={true} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Image>;

const testImage = "https://d1b2grdnesao2u.cloudfront.net/homepage/homepage-preload-image-opt.jpg";

export const Default = () => <Image src={testImage} alt="coffee cup" />;

export const WithStyles = () => (
  <Image src={testImage} alt="coffee cup" className={styles.imageMed} />
);
