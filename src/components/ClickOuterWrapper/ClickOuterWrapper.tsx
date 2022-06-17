import React, { MutableRefObject } from "react";
import { useClickOuter } from "../../hooks/useClickOuter";

interface Props {
  isOpen: boolean; //whether the wrapper is open and should be listening to clicks
  onOutsideClick: () => void; //function to perform on click outside wrapper
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exceptions: MutableRefObject<any>[];
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export const ClickOuterWrapper = (props: Props): React.ReactElement => {
  const { isOpen, onOutsideClick, exceptions = [], ...otherProps } = props;

  const element = useClickOuter(isOpen, onOutsideClick, ...exceptions);

  return (
    <div ref={element} {...otherProps}>
      {props.children}
    </div>
  );
};
