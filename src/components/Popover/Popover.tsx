import React, { ReactElement, ReactNode, RefObject, useRef } from "react";
import { Modifier, usePopper } from "react-popper";
import * as PopperJS from "@popperjs/core";

export type PopperOptions<T> = Omit<Partial<PopperJS.Options>, "modifiers"> & {
  createPopper?: typeof PopperJS.createPopper;
  modifiers?: ReadonlyArray<Modifier<T>>;
};

type Props<T> = {
  referenceRef: RefObject<HTMLButtonElement>;
  visible: boolean;
  children: ReactNode;
  popperOptions?: PopperOptions<T>;
  zIndex?: string | number;
};

export const Popover = ({
  referenceRef,
  visible,
  popperOptions,
  children,
  zIndex = "auto",
}: // any is the type used in react-popper
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Props<any>): ReactElement => {
  const popperRef = useRef<HTMLDivElement>(null);

  const { styles: popoverStyles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    popperOptions,
  );

  return (
    // NOTE: in order for the popover to render properly, it must be in the
    // dom at all times. This is what helps it know what its surroundings are.
    // using a combination of visibility "hidden" and zIndex -1 makes sure the
    // hidden popup doesn't disrupt the dom flow of other elements (similiar to
    // what you'd expect from display "none")
    <div
      ref={popperRef}
      style={{
        ...popoverStyles.popper,
        // -1 keeps the hidden popover from blocking other elements
        zIndex: visible ? zIndex : -1,
        // throwing this value in the style prop allows us to make jest dom
        // assertions on them
        visibility: visible ? "visible" : "hidden",
      }}
      {...attributes.popper}
    >
      <div>
        <div style={popoverStyles.offset}>{children}</div>
      </div>
    </div>
  );
};
