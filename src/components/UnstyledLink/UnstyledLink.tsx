import React from "react";

export interface Props {
  /**
   * Value for the href
   */
  url?: string;
  /**
   * Indicate if the link goes to an external page
   */
  external?: boolean;
  /**
   * Accessibility text for the link
   */
  accessibilityLabel: string;
  /**
   * Link content
   */
  children: React.ReactNode;
  className?: string;
  /**
   * A callback for when the link is clicked
   */
  onClick?(): void;
}

export function UnstyledLink({
  url,
  external = false,
  children,
  className,
  onClick = () => ({}),
  accessibilityLabel,
}: Props): React.ReactElement {
  return external ? (
    <a
      href={url}
      aria-label={accessibilityLabel}
      rel="noopener noreferrer"
      target="_blank"
      {...{ className, onClick }}
    >
      {children}
    </a>
  ) : (
    <a aria-label={accessibilityLabel} {...{ className, onClick }}>
      {children}
    </a>
  );
}
