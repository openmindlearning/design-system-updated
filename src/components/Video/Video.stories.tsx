import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as styles from "./Video.css";

import { Video } from "./Video";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Video",
  component: Video,
  parameters: {},
} as ComponentMeta<typeof Video>;

const sampleVideo =
  "https://res.cloudinary.com/monthly/video/upload/q_auto:best,f_auto,w_1080,c_scale/v1585801290/monthly-admin-images/homepage/bg1_1_fihvhh.mp4";
const samplePoster =
  "https://res.cloudinary.com/monthly/image/upload/v1623438031/monthly-admin-images/homepage/homepage-preload-image-opt.jpg";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  url: sampleVideo,
  controls: true,
  poster: samplePoster,
  type: "video/mp4",
};

export const Trailer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Trailer.args = {
  className: styles.trailer,
  url: sampleVideo,
  controls: true,
  poster: samplePoster,
  type: "video/mp4",
};
