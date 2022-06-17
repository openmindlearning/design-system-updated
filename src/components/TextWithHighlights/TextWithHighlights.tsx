import * as styles from "./TextWithHighlights.css";

import React, { Children } from "react";
import classNames from "classnames";

interface Props {
  /**
   * Supports children like any normal div, but only direct string children will be processed for highlighted text
   */
  children?: React.ReactNode;

  /**
   * Custom styles
   */
  className?: string;

  /**
   * Variant of highlight to apply.
   * 'background' (default) applies a colored box behind text
   * 'textColor' adjusts text color with no background
   */
  highlightVariant?: "background" | "textColor";

  /**
   * Custom styles for highlighted blocks
   */
  highlightClassName?: string;
}

/**
 * TextWithHighlights component is a single-purpose component to take any string children
 * and replace the markdown 'highlight' markers (==) with a styled <mark> to produce
 * highlighted sections of text.
 *
 * For example:
 * "A phrase with ==multiple parts== that are ==highlighted== seprately"
 *
 * Will show "multiple parts" and "highlighted" with a highlighted background color,
 * and the '==' will be removed.
 *
 * Note: TextWithHighlights uses `dangerouslySetInnerHTML` and should not be used to render user-generated content.
 * Also Note: TextWithHighlights does not traverse nested children. Only direct string children will be processed.
 *
 */
export const TextWithHighlights = ({
  children,
  className,
  highlightVariant = "background",
  highlightClassName,
}: Props): React.ReactElement => {
  const childrenArray = Children.toArray(children);
  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (typeof child === "string") {
          const highlightClasses = classNames(
            {
              [styles.backgroundHighlight]: highlightVariant === "background",
              [styles.textColorHighlight]: highlightVariant === "textColor",
            },
            highlightClassName,
          );

          // use regex to replace all ==x== with <mark class="myclass">x</mark>
          const html = child.replace(
            /==(.*?)==/gm,
            `<mark class="${styles.inheritedText} ${highlightClasses}">$1</mark>`,
          );

          // because we're using regex to create html elements within a string,
          // we're bypassing the React's JSX and must use dangerouslySetInnerHTML
          return (
            <div
              key={index}
              className={styles.inheritedText}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          // wrap in fragment to add key
          return <React.Fragment key={index}>{child}</React.Fragment>;
        }
      })}
    </div>
  );
};
