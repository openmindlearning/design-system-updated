import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExperienceCard } from "./ExperienceCard";
import { ProgressBar } from "../ProgressBar";

export default {
  title: "Common / ExperienceCard",
  component: ExperienceCard,
} as ComponentMeta<typeof ExperienceCard>;

const Template: ComponentStory<typeof ExperienceCard> = (args) => <ExperienceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Name of path",
  subtitle: "12 exercises left",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  instructorName: "Harvey Dog",
  progressIndicator: <ProgressBar displayPercentageText percentage={45} />,
};

export const NoInstructorName = Template.bind({});
NoInstructorName.args = {
  title: "Name of path",
  subtitle: "12 exercises left",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  progressIndicator: <ProgressBar displayPercentageText percentage={45} />,
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: "Name of path",
  instructorName: "Doctor Who",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  progressIndicator: <ProgressBar displayPercentageText percentage={45} />,
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  title: "Name of path",
  thumbnailURL:
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=100&w=100",
  instructorName: "The Cat in the Hat",
  progressIndicator: <span>Starts in 10 days</span>,
};
