import React from "react";

// from https://www.joshwcomeau.com/react/prefers-reduced-motion/

const QUERY = "(prefers-reduced-motion: no-preference)";
export function usePrefersReducedMotion() {
  // Default to no-animations, since we don't know what the
  // user's preference is on the server.
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true);
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia?.(QUERY);
    if (mediaQueryList) {
      // Set the true initial value, now that we're on the client:
      setPrefersReducedMotion(mediaQueryList.matches);
    }

    // Register our event listener
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };
    if (mediaQueryList && typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", listener);
    }
    return () => {
      if (mediaQueryList && typeof mediaQueryList.removeEventListener === "function") {
        mediaQueryList.removeEventListener("change", listener);
      }
    };
  }, []);
  return prefersReducedMotion;
}
