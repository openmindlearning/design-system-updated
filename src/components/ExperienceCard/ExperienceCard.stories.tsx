import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExperienceCard } from "./ExperienceCard";
import { ProgressBar } from "../ProgressBar";

export default {
  title: "Common / ExperienceCard",
  component: ExperienceCard,
} as ComponentMeta<typeof ExperienceCard>;

const DemoUpcomingLabel = ({ text }: { text: string }): React.ReactElement => {
  return <span>{text}</span>;
};

// When using the ExperienceCard component, we'd want to pass in a responsive ProgressBar.
// This is a demo one for Storybook preview purposes, and does not resize on mobile.
const DemoProgressBar = (): React.ReactElement => {
  return <ProgressBar displayPercentageText percentage={45} width={"264px"} />;
};
const Template: ComponentStory<typeof ExperienceCard> = (args) => <ExperienceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Learn how to bake super delicious snickerdoodles",
  subtitle: "12 exercises left",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  instructorName: "Harvey Dog",
  progressIndicator: <DemoProgressBar />,
};

export const NoInstructorName = Template.bind({});
NoInstructorName.args = {
  title: "Filmmaking & Storytelling",
  subtitle: "12 exercises left",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  progressIndicator: <DemoProgressBar />,
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: "Art Birds",
  instructorName: "Doctor Who",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  progressIndicator: <DemoProgressBar />,
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  title: "Name of path",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  instructorName: "The Cat in the Hat",
  // progressIndicator: <span style={{display: "flex", justifyContent: "flex-end"}}>Starts in 10 days</span>,
  progressIndicator: <DemoUpcomingLabel text="Starts in 10 days" />,
};

export const UpcomingLongTitle = Template.bind({});
UpcomingLongTitle.args = {
  title: "I'm a little teapot short and stout",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  instructorName: "The Teapot",
  progressIndicator: <DemoUpcomingLabel text="Starts in 10 days" />,
};

export const CompletedLongTitle = Template.bind({});
CompletedLongTitle.args = {
  title: "I'm a little teapot short and stout",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  instructorName: "The Teapot",
  progressIndicator: <DemoUpcomingLabel text="Completed on September 31, 2020" />,
};
