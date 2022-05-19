import * as styles from "./TruncatedTags.stories.css";

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TruncatedTags, ClickOuterWrapper, Popover, Tag } from "../../components";

export default {
  title: "Design System / TruncatedTags",
  component: TruncatedTags,
} as ComponentMeta<typeof TruncatedTags>;

const Template: ComponentStory<typeof TruncatedTags> = (args) => <TruncatedTags {...args} />;

const tags = [
  "Singing",
  "Music Production",
  "Piano",
  "Baking",
  "Art",
  "Dancing",
  "Engineering",
  "Shoe Design",
  "Knitting",
  "Biking",
  "Welding",
  "Carpentry",
  "Tattoo Design",
  "Gardening",
  "Camping",
  "Basketball",
  "Skateboarding",
  "Traveling",
  "Composting",
  "Kayaking",
  "Powerlifting",
  "Slacklining",
  "Hiking",
];

export const Default = Template.bind({});
Default.args = {
  maxRows: 2,
  maxTags: Infinity,
  tags: tags,
  onTagClicked: (tag) => console.log(tag),
  popoverSlot: ({ numberOfTagsHiddenTagRef, overflowedTags, visible, close }) => (
    <Popover
      referenceRef={numberOfTagsHiddenTagRef}
      visible={visible}
      zIndex="auto"
      popperOptions={{
        placement: "right-start",
        modifiers: [
          {
            name: "offset",
            enabled: true,
            options: {
              offset: [0, 16],
            },
          },
          {
            name: "flip",
            options: {
              fallbackPlacements: ["bottom"],
            },
          },
        ],
      }}
    >
      <ClickOuterWrapper
        className={styles.popover}
        isOpen
        onOutsideClick={close}
        exceptions={[numberOfTagsHiddenTagRef]}
      >
        <>
          {overflowedTags.map((tag) => (
            <div key={tag} className={styles.tagContainer}>
              <Tag onClick={() => console.log(tag)}>{tag}</Tag>
            </div>
          ))}
        </>
      </ClickOuterWrapper>
    </Popover>
  ),
};
