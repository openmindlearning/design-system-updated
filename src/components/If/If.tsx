import React from "react";

interface Props {
  children: React.ReactNode;
  /**
   * Determines to show or hide the content inside the component.
   */
  condition: boolean;
}

export const If = ({ children, condition }: Props) => {
  return <>{condition ? children : null}</>;
};
