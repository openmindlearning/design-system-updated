import * as styles from "./ImageBannerWithBlurredBox.stories.css";

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";
import { IconVariant } from "./constants";

export default {
  title: "Design System/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const About = Template.bind({});
About.args = {
  variant: IconVariant.About,
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  variant: IconVariant.ArrowLeft,
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  variant: IconVariant.ArrowRight,
};

export const AtMentions = Template.bind({});
AtMentions.args = {
  variant: IconVariant.AtMentions,
};

export const AttachFile = Template.bind({});
AttachFile.args = {
  variant: IconVariant.AttachFile,
};

export const Back = Template.bind({});
Back.args = {
  variant: IconVariant.Back,
};

export const BellNoNotification = Template.bind({});
BellNoNotification.args = {
  variant: IconVariant.BellNoNotification,
};

export const BellNotification = Template.bind({});
BellNotification.args = {
  variant: IconVariant.BellNotification,
};

export const BellUniversalNotification = Template.bind({});
BellUniversalNotification.args = {
  variant: IconVariant.BellUniversalNotification,
};

export const Bold = Template.bind({});
Bold.args = {
  variant: IconVariant.Bold,
};
export const BulletList = Template.bind({});
BulletList.args = {
  variant: IconVariant.BulletList,
};
export const Camera = Template.bind({});
Camera.args = {
  variant: IconVariant.Camera,
};
export const Checkmark = Template.bind({});
Checkmark.args = {
  variant: IconVariant.Checkmark,
};
export const CircleCheck = Template.bind({});
CircleCheck.args = {
  variant: IconVariant.CircleCheck,
};
export const Close = Template.bind({});
Close.args = {
  variant: IconVariant.Close,
};
export const Code = Template.bind({});
Code.args = {
  variant: IconVariant.Code,
};
export const CollapseList = Template.bind({});
CollapseList.args = {
  variant: IconVariant.CollapseList,
};
export const Diamond = Template.bind({});
Diamond.args = {
  variant: IconVariant.Diamond,
};
export const Discussion = Template.bind({});
Discussion.args = {
  variant: IconVariant.Discussion,
};
export const Download = Template.bind({});
Download.args = {
  variant: IconVariant.Download,
};
export const EmojiPicker = Template.bind({});
EmojiPicker.args = {
  variant: IconVariant.EmojiPicker,
};
export const ExpandCard = Template.bind({});
ExpandCard.args = {
  variant: IconVariant.ExpandCard,
};
export const Expand = Template.bind({});
Expand.args = {
  variant: IconVariant.Expand,
};
export const ExpandList = Template.bind({});
ExpandList.args = {
  variant: IconVariant.ExpandList,
};
export const EyeClosed = Template.bind({});
EyeClosed.args = {
  variant: IconVariant.EyeClosed,
};
export const EyeOpen = Template.bind({});
EyeOpen.args = {
  variant: IconVariant.EyeOpen,
};
export const Flag = Template.bind({});
Flag.args = {
  variant: IconVariant.Flag,
};
export const FlipCamera = Template.bind({});
FlipCamera.args = {
  variant: IconVariant.FlipCamera,
};
export const FullscreenExit = Template.bind({});
FullscreenExit.args = {
  variant: IconVariant.FullscreenExit,
};
export const Fullscreen = Template.bind({});
Fullscreen.args = {
  variant: IconVariant.Fullscreen,
};
export const HeartEmpty = Template.bind({});
HeartEmpty.args = {
  variant: IconVariant.HeartEmpty,
};
export const HeartFilled = Template.bind({});
HeartFilled.args = {
  variant: IconVariant.HeartFilled,
};
export const Home = Template.bind({});
Home.args = {
  variant: IconVariant.Home,
};
export const Hourglass = Template.bind({});
Hourglass.args = {
  variant: IconVariant.Hourglass,
};
export const Image = Template.bind({});
Image.args = {
  variant: IconVariant.Image,
};
export const Images = Template.bind({});
Images.args = {
  variant: IconVariant.Images,
};
export const Italics = Template.bind({});
Italics.args = {
  variant: IconVariant.Italics,
};
export const Link = Template.bind({});
Link.args = {
  variant: IconVariant.Link,
};
export const Lock = Template.bind({});
Lock.args = {
  variant: IconVariant.Lock,
};
export const Messaging = Template.bind({});
Messaging.args = {
  variant: IconVariant.Messaging,
};
export const Minus = Template.bind({});
Minus.args = {
  variant: IconVariant.Minus,
};
export const MoreDropdown = Template.bind({});
MoreDropdown.args = {
  variant: IconVariant.MoreDropdown,
};
export const More = Template.bind({});
More.args = {
  variant: IconVariant.More,
};
export const OrderedList = Template.bind({});
OrderedList.args = {
  variant: IconVariant.OrderedList,
};
export const Peers = Template.bind({});
Peers.args = {
  variant: IconVariant.Peers,
};
export const Pencil = Template.bind({});
Pencil.args = {
  variant: IconVariant.Pencil,
};
export const PersonOutline = Template.bind({});
PersonOutline.args = {
  variant: IconVariant.PersonOutline,
};
export const PitchTrainer = Template.bind({});
PitchTrainer.args = {
  variant: IconVariant.PitchTrainer,
};
export const Plus = Template.bind({});
Plus.args = {
  variant: IconVariant.Plus,
};
export const Posts = Template.bind({});
Posts.args = {
  variant: IconVariant.Posts,
};
export const Question = Template.bind({});
Question.args = {
  variant: IconVariant.Question,
};
export const RecordAudio = Template.bind({});
RecordAudio.args = {
  variant: IconVariant.RecordAudio,
};
export const RecordVideo = Template.bind({});
RecordVideo.args = {
  variant: IconVariant.RecordVideo,
};
export const Reply = Template.bind({});
Reply.args = {
  variant: IconVariant.Reply,
};
export const RightChevron = Template.bind({});
RightChevron.args = {
  variant: IconVariant.RightChevron,
};
export const Save = Template.bind({});
Save.args = {
  variant: IconVariant.Save,
};
export const Search = Template.bind({});
Search.args = {
  variant: IconVariant.Search,
};
export const Share = Template.bind({});
Share.args = {
  variant: IconVariant.Share,
};
export const Sidebar = Template.bind({});
Sidebar.args = {
  variant: IconVariant.Sidebar,
};
export const Spark = Template.bind({});
Spark.args = {
  variant: IconVariant.Spark,
};
export const Studio = Template.bind({});
Studio.args = {
  variant: IconVariant.Studio,
};
export const ThreeDotHorizontal = Template.bind({});
ThreeDotHorizontal.args = {
  variant: IconVariant.ThreeDotHorizontal,
};
export const Underline = Template.bind({});
Underline.args = {
  variant: IconVariant.Underline,
};
export const UpDown = Template.bind({});
UpDown.args = {
  variant: IconVariant.UpDown,
};
export const UploadAudio = Template.bind({});
UploadAudio.args = {
  variant: IconVariant.UploadAudio,
};
export const UploadVideo = Template.bind({});
UploadVideo.args = {
  variant: IconVariant.UploadVideo,
};
export const Warning = Template.bind({});
Warning.args = {
  variant: IconVariant.Warning,
};

export const Delete = Template.bind({});
Delete.args = {
  variant: IconVariant.Delete,
};
