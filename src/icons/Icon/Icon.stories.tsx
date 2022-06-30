import * as styles from "./ImageBannerWithBlurredBox.stories.css";

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";
import { Variant } from "./constants";

export default {
  title: "Base/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const About = Template.bind({});
About.args = {
  variant: Variant.About,
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  variant: Variant.ArrowLeft,
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  variant: Variant.ArrowRight,
};

export const AtMentions = Template.bind({});
AtMentions.args = {
  variant: Variant.AtMentions,
};

export const AttachFile = Template.bind({});
AttachFile.args = {
  variant: Variant.AttachFile,
};

export const Back = Template.bind({});
Back.args = {
  variant: Variant.Back,
};

export const BellNoNotification = Template.bind({});
BellNoNotification.args = {
  variant: Variant.BellNoNotification,
};

export const BellNotification = Template.bind({});
BellNotification.args = {
  variant: Variant.BellNotification,
};

export const Bold = Template.bind({});
Bold.args = {
  variant: Variant.Bold,
};
export const BulletList = Template.bind({});
BulletList.args = {
  variant: Variant.BulletList,
};
export const Camera = Template.bind({});
Camera.args = {
  variant: Variant.Camera,
};
export const Checkmark = Template.bind({});
Checkmark.args = {
  variant: Variant.Checkmark,
};
export const CircleCheck = Template.bind({});
CircleCheck.args = {
  variant: Variant.CircleCheck,
};
export const Close = Template.bind({});
Close.args = {
  variant: Variant.Close,
};
export const Code = Template.bind({});
Code.args = {
  variant: Variant.Code,
};
export const CollapseLesson = Template.bind({});
CollapseLesson.args = {
  variant: Variant.CollapseLesson,
};
export const CollapseList = Template.bind({});
CollapseList.args = {
  variant: Variant.CollapseList,
};
export const Diamond = Template.bind({});
Diamond.args = {
  variant: Variant.Diamond,
};
export const Discussion = Template.bind({});
Discussion.args = {
  variant: Variant.Discussion,
};
export const Download = Template.bind({});
Download.args = {
  variant: Variant.Download,
};
export const EmojiPicker = Template.bind({});
EmojiPicker.args = {
  variant: Variant.EmojiPicker,
};
export const ExpandCard = Template.bind({});
ExpandCard.args = {
  variant: Variant.ExpandCard,
};
export const Expand = Template.bind({});
Expand.args = {
  variant: Variant.Expand,
};
export const ExpandLesson = Template.bind({});
ExpandLesson.args = {
  variant: Variant.ExpandLesson,
};
export const ExpandList = Template.bind({});
ExpandList.args = {
  variant: Variant.ExpandList,
};
export const EyeClosed = Template.bind({});
EyeClosed.args = {
  variant: Variant.EyeClosed,
};
export const EyeOpen = Template.bind({});
EyeOpen.args = {
  variant: Variant.EyeOpen,
};
export const Flag = Template.bind({});
Flag.args = {
  variant: Variant.Flag,
};
export const FlipCamera = Template.bind({});
FlipCamera.args = {
  variant: Variant.FlipCamera,
};
export const FullscreenExit = Template.bind({});
FullscreenExit.args = {
  variant: Variant.FullscreenExit,
};
export const Fullscreen = Template.bind({});
Fullscreen.args = {
  variant: Variant.Fullscreen,
};
export const HeartEmpty = Template.bind({});
HeartEmpty.args = {
  variant: Variant.HeartEmpty,
};
export const HeartFilled = Template.bind({});
HeartFilled.args = {
  variant: Variant.HeartFilled,
};
export const Home = Template.bind({});
Home.args = {
  variant: Variant.Home,
};
export const Hourglass = Template.bind({});
Hourglass.args = {
  variant: Variant.Hourglass,
};
export const Image = Template.bind({});
Image.args = {
  variant: Variant.Image,
};
export const Images = Template.bind({});
Images.args = {
  variant: Variant.Images,
};
export const Italics = Template.bind({});
Italics.args = {
  variant: Variant.Italics,
};
export const Link = Template.bind({});
Link.args = {
  variant: Variant.Link,
};
export const Lock = Template.bind({});
Lock.args = {
  variant: Variant.Lock,
};
export const Messaging = Template.bind({});
Messaging.args = {
  variant: Variant.Messaging,
};
export const MoreDropdown = Template.bind({});
MoreDropdown.args = {
  variant: Variant.MoreDropdown,
};
export const More = Template.bind({});
More.args = {
  variant: Variant.More,
};
export const OrderedList = Template.bind({});
OrderedList.args = {
  variant: Variant.OrderedList,
};
export const Peers = Template.bind({});
Peers.args = {
  variant: Variant.Peers,
};
export const Pencil = Template.bind({});
Pencil.args = {
  variant: Variant.Pencil,
};
export const PersonOutline = Template.bind({});
PersonOutline.args = {
  variant: Variant.PersonOutline,
};
export const PitchTrainer = Template.bind({});
PitchTrainer.args = {
  variant: Variant.PitchTrainer,
};
export const Plus = Template.bind({});
Plus.args = {
  variant: Variant.Plus,
};
export const Posts = Template.bind({});
Posts.args = {
  variant: Variant.Posts,
};
export const Question = Template.bind({});
Question.args = {
  variant: Variant.Question,
};
export const RecordAudio = Template.bind({});
RecordAudio.args = {
  variant: Variant.RecordAudio,
};
export const RecordVideo = Template.bind({});
RecordVideo.args = {
  variant: Variant.RecordVideo,
};
export const Reply = Template.bind({});
Reply.args = {
  variant: Variant.Reply,
};
export const RightChevron = Template.bind({});
RightChevron.args = {
  variant: Variant.RightChevron,
};
export const Save = Template.bind({});
Save.args = {
  variant: Variant.Save,
};
export const Search = Template.bind({});
Search.args = {
  variant: Variant.Search,
};
export const Share = Template.bind({});
Share.args = {
  variant: Variant.Share,
};
export const Sidebar = Template.bind({});
Sidebar.args = {
  variant: Variant.Sidebar,
};
export const Spark = Template.bind({});
Spark.args = {
  variant: Variant.Spark,
};
export const Studio = Template.bind({});
Studio.args = {
  variant: Variant.Studio,
};
export const ThreeDotHorizontal = Template.bind({});
ThreeDotHorizontal.args = {
  variant: Variant.ThreeDotHorizontal,
};
export const Underline = Template.bind({});
Underline.args = {
  variant: Variant.Underline,
};
export const UploadAudio = Template.bind({});
UploadAudio.args = {
  variant: Variant.UploadAudio,
};
export const UploadVideo = Template.bind({});
UploadVideo.args = {
  variant: Variant.UploadVideo,
};
export const Warning = Template.bind({});
Warning.args = {
  variant: Variant.Warning,
};
