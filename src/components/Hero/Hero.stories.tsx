import * as styles from "./Hero.stories.css";

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Title, Subtitle, Description, ArgsTable, Stories } from "@storybook/addon-docs";

import { Hero } from "./Hero";

export default {
  title: "Common/Hero",
  component: Hero,
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
} as ComponentMeta<typeof Hero>;

const sampleImage = "https://d1b2grdnesao2u.cloudfront.net/homepage/homepage-preload-image-opt.jpg";
const sampleVideo =
  "https://res.cloudinary.com/monthly/video/upload/q_auto:best,f_auto,w_2060,c_scale/v1585801290/monthly-admin-images/homepage/bg1_1_fihvhh.mp4";
const sampleVideoPoster =
  "https://res.cloudinary.com/monthly/image/upload/v1623438031/monthly-admin-images/homepage/homepage-preload-image-opt.jpg";

export const Default = () => (
  <Hero
    className={styles.defaultContainer}
    imageSrc={sampleImage}
    videoSrc={sampleVideo}
    videoPosterSrc={sampleVideoPoster}
  />
);

const SampleChildren = () => (
  <div className={styles.contentContainer}>
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>STEP INSIDE THE STUDIO OF THE WORLD'S TOP CREATIVES</h1>
    </div>
  </div>
);

export const VideoWithChildren = () => (
  <Hero
    className={styles.defaultContainer}
    imageSrc={sampleImage}
    videoSrc={sampleVideo}
    videoPosterSrc={sampleVideoPoster}
  >
    <SampleChildren />
  </Hero>
);

export const Image = () => (
  <Hero className={styles.defaultContainer} imageSrc={sampleImage}>
    <SampleChildren />
  </Hero>
);
