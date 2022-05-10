import React from "react";

/*
  usePrefersReducedMotion

  Use this hook to determine if the user has set a prefers-reduced-motion preference at JS runtime.

  Note: SSR may break this so if we ever use Next.js we'll need to update.
  The SSR version of this hook has to make an initial assumption about prefers-reduced-motion
  on first render, since we wouldn't know the user's preference on server-side. 
  So this current implementation is better to use while we _arent_ using SSR.  
  See https://www.joshwcomeau.com/react/prefers-reduced-motion/
*/

const QUERY = "(prefers-reduced-motion: no-preference)";

const getInitialState = () => !window.matchMedia?.(QUERY)?.matches;

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(getInitialState);
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia?.(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };
    if (mediaQueryList && typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList?.addEventListener("change", listener);
      return () => {
        mediaQueryList?.removeEventListener("change", listener);
      };
    }
  }, []);
  return prefersReducedMotion;
};
