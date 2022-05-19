import * as styles from "./TruncatedTags.css";

import React, { ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Tag } from "../../components";

interface Props {
  /**
   * The working list of tags
   */
  tags: string[];
  /**
   * The maximum number of rows the tags should be displayed on
   */
  maxRows?: number;
  /**
   * The maximum number of tags that should ever be displayed
   */
  maxTags?: number;
  /**
   * Optional fn to call if a tag is clicked
   */
  onTagClicked?: (tag: string) => void;
  /**
   * The slot in which a popover could optionally be rendered
   */
  popoverSlot?: ({
    numberOfTagsHiddenTagRef,
    overflowedTags,
    visible,
    close,
  }: {
    numberOfTagsHiddenTagRef: React.MutableRefObject<null>;
    overflowedTags: string[];
    visible: boolean;
    close: () => void;
  }) => ReactNode;
}

export const TruncatedTags = ({
  tags,
  maxRows = Infinity,
  maxTags = Infinity,
  onTagClicked,
  popoverSlot,
}: Props): ReactElement => {
  const [displayedTags, setDisplayedTags] = useState<string[]>([]);
  const [overflowedTags, setOverflowedTags] = useState<string[]>([]);

  const boundingContainerRef = useRef<HTMLDivElement>(null);
  const hiddenTagRef = useRef<HTMLDivElement>(null);

  const numberOfTagsHiddenTagRef = useRef(null);

  const [fullTagsPopover, setFullTagsPopover] = useState(false);

  /**
   * Calculates how many tags can fit inside of a boundingContainer given the
   * tags provided and the maxRows those tags have to display on.
   *
   * @param tags - Tags to start with.
   * @param maxRows - Maximum number of rows the tags can be displayed on.
   * @param boundingContainer - HTMLDivElement the tags are housed inside.
   * @param hiddenTag - Hidden HTMLDivElement used for performing width
   * calculations.
   * @param overflowTags - Tags (if any) that have already been ruled out of the
   * final display. Used when the function recurses.
   */
  const calculateTagDisplay = useCallback(
    (
      tags: string[],
      maxRows: number,
      boundingContainer: HTMLDivElement,
      hiddenTag: HTMLDivElement,
      overflowedTags: string[],
    ): void => {
      const rows: string[][] = [];
      let currentRow: string[] = [];
      let currentSumWidth = 0;

      const iterTags =
        overflowedTags.length > 0
          ? [...tags.slice(0, tags.length - overflowedTags.length), `+ ${overflowedTags.length}`]
          : tags;

      for (const [idx, t] of iterTags.entries()) {
        hiddenTag.innerText = t;

        // collect all computed styles on the tag
        const computedStyle = document.defaultView?.getComputedStyle(hiddenTag);

        // calculate the width the hidden tag takes up on the screen
        const currentTagWidth =
          hiddenTag.getBoundingClientRect().width +
          (parseInt(computedStyle?.marginLeft || "", 10) || 0) +
          (parseInt(computedStyle?.marginRight || "", 10) || 0) +
          (parseInt(computedStyle?.borderLeft || "", 10) || 0) +
          (parseInt(computedStyle?.borderRight || "", 10) || 0);

        if (currentSumWidth + currentTagWidth < boundingContainer.getBoundingClientRect().width) {
          // the current tag can fit on this row
          currentRow.push(t);
          currentSumWidth += currentTagWidth;
        } else {
          // push the current row to the main rows array, since there is no room
          // for the current tag
          rows.push(currentRow);

          if (rows.length == maxRows) {
            // we prematurely filled all our rows, recalculation is necessary
            let excessTags: string[];
            if (overflowedTags.length > 0) {
              // we've already cut tags before

              // pop the ending +n tag since we have now established n to be
              // incorrect ...
              iterTags.pop();

              // ... and pop one more tag (the actual tag to cut) and prepend it
              // to the excessTags array to have another calculation run
              excessTags = [iterTags.pop() as string, ...overflowedTags];
            } else {
              // tagsCut is empty, so create the excessTags array with
              // everything that couldn't make it onto this final row and
              // prepare to be recalculated
              excessTags = iterTags.slice(idx);
            }

            return calculateTagDisplay(tags, maxRows, boundingContainer, hiddenTag, excessTags);
          }

          // initialize the current row with the current tag that could not fit
          currentRow = [t];
          currentSumWidth = currentTagWidth;
        }
      }

      rows.push(currentRow);

      // calculation complete, return the finalized rows
      setOverflowedTags(overflowedTags);
      setDisplayedTags(rows.flat());
    },
    [],
  );

  const initCalculation = useCallback(() => {
    if (boundingContainerRef?.current && hiddenTagRef?.current) {
      // a bounding container and hidden tag have been set -- calcuation is now
      // safe
      calculateTagDisplay(
        tags,
        maxRows,
        boundingContainerRef.current,
        hiddenTagRef.current,
        maxTags ? tags.slice(maxTags) : [],
      );
    }
  }, [calculateTagDisplay, maxRows, maxTags, tags]);

  useEffect(() => {
    if (overflowedTags.length === 0) {
      setFullTagsPopover(false);
    }
  }, [overflowedTags]);

  useEffect(() => {
    initCalculation();
    window.addEventListener("resize", initCalculation);

    return () => {
      window.removeEventListener("resize", initCalculation);
    };
  }, [initCalculation]);

  return (
    <>
      {/* This tag is completely hidden to the user, but used by the
        calculateTagDisplay function to determine how much space a tag, given
        the supplied text and all of its global styles, will take up on the
        screen. By having a concrete (though hidden) tag to render to, our
        calculateTagDisplay function doesn't have to perform any guesswork.
        */}
      <div className={styles.hiddenRender}>
        <PaddedTag as="div" ref={hiddenTagRef} />
      </div>
      <div ref={boundingContainerRef} className={styles.boundingContainer}>
        {/* If the number of displayed tags is less than the number of tags
        passed into the component, then there are hidden tags, and a popover
        should be displayed */}

        {overflowedTags.length > 0 ? (
          <>
            {displayedTags?.slice(0, -1).map((tag, idx) => (
              <PaddedTag onClick={() => onTagClicked?.(tag)} key={idx}>
                {tag}
              </PaddedTag>
            ))}
            {/* This is the +n tag */}
            <PaddedTag
              ref={numberOfTagsHiddenTagRef}
              onClick={() => setFullTagsPopover(!fullTagsPopover)}
            >
              {displayedTags[displayedTags.length - 1]}
            </PaddedTag>

            {popoverSlot?.({
              numberOfTagsHiddenTagRef,
              overflowedTags,
              visible: fullTagsPopover,
              close: () => setFullTagsPopover(false),
            })}
          </>
        ) : (
          displayedTags?.map((tag, idx) => (
            <PaddedTag key={idx} onClick={() => onTagClicked?.(tag)}>
              {tag}
            </PaddedTag>
          ))
        )}
      </div>
    </>
  );
};

/**
 * The main reason for adding a PaddedTag component here is so that
 * the two instances of PaddedTag above share the exact same styling.
 * If they don't, this component will be unable to accurately calculate
 * the maxRows.
 */
interface PaddedTagProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: ReactNode;
}

const PaddedTag = React.forwardRef<HTMLElement, PaddedTagProps>(
  ({ as = "button", children, ...elementAttributes }: PaddedTagProps, ref): ReactElement => (
    <Tag className={styles.tag} {...{ as, ref }} {...elementAttributes}>
      {children}
    </Tag>
  ),
);

PaddedTag.displayName = "PaddedTag";
