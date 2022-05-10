import * as styles from "./TextWithHighlights.stories.css";

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Title, Subtitle, Description, ArgsTable, Stories } from "@storybook/addon-docs";

import { TextWithHighlights } from "./TextWithHighlights";

export default {
  title: "Common/TextWithHighlights",
  component: TextWithHighlights,
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
} as ComponentMeta<typeof TextWithHighlights>;

export const HighlightedPhrase = () => (
  <TextWithHighlights className={styles.displayText}>
    A PHRASE WITH ==ONLY ONE== HIGHLIGHTED PART
  </TextWithHighlights>
);

export const MultiplePhrases = () => (
  <TextWithHighlights
    highlightVariant="background"
    className={styles.displayText}
  >{`A phrase with ==multiple parts== that are ==highlighted== seprately. This phrase should ==also== be long enough to ==test== wrapping`}</TextWithHighlights>
);

export const TextColorHighlight = () => (
  <TextWithHighlights highlightVariant="textColor" className={styles.displayText}>
    A phrase with ==multiple parts== that are ==highlighted== seprately. This phrase should ==also==
    be long enough to ==test== wrapping
  </TextWithHighlights>
);

export const MixedChildren = () => (
  <TextWithHighlights className={styles.bodyText}>
    <div className={styles.childrenComponent} />
    some ==highlighted text== as a top level child
    <div className={styles.childrenComponent}>
      A ==phrase== in a child div won't be highlighted. Only direct string children get processed.
    </div>
    Another ==top level child== phrase
    <div className={styles.childrenComponent} />
  </TextWithHighlights>
);

export const UnclosedHighlightMarker = () => (
  <TextWithHighlights className={styles.displayText}>
    A phrase with an ==unclosed highlight tag won't he highlighted
  </TextWithHighlights>
);
