import React, { ReactElement, ReactNode, RefObject, useRef } from "react";
import { Modifier, usePopper } from "react-popper";
import * as PopperJS from "@popperjs/core";

type Props<T> = {
  referenceRef: RefObject<HTMLButtonElement>;
  visible: boolean;
  children: ReactNode;
  popperOptions?: Omit<Partial<PopperJS.Options>, "modifiers"> & {
    createPopper?: typeof PopperJS.createPopper;
    modifiers?: ReadonlyArray<Modifier<T>>;
  };
};

export const Popover = ({
  referenceRef,
  visible,
  popperOptions,
  children,
}: // any is the type used in react-popper
Props<any>): ReactElement => {
  const popperRef = useRef<HTMLDivElement>(null);

  const { styles, attributes } = usePopper(referenceRef.current, popperRef.current, popperOptions);

  return (
    <div ref={popperRef} style={styles.popper} {...attributes.popper}>
      {visible && <div style={styles.offset}>{children}</div>}
    </div>
  );
};
