import React from "react";
interface Props {
    children: React.ReactNode;
    className?: string;
}
/**
 * A box component that uses the `backdropFilter` property to blur its background.

- The `backdropFilter` property has imperfect browser support (see [caniuse](https://caniuse.com/css-backdrop-filter)).
 */
export declare const BlurredBox: ({ className, children }: Props) => React.ReactElement;
export {};
