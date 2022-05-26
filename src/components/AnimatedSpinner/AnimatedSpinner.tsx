import React from "react";
import classnames from "classnames";

interface Props {
  className?: string;
}

export function AnimatedSpinner({ className }: Props): React.ReactElement {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={classnames(["lds-rolling", className])}
      style={{ background: "0 0" }}
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="currentColor"
        strokeWidth={10}
        r={42}
        strokeDasharray="197.92033717615698 67.97344572538566"
        transform="rotate(233.933 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
