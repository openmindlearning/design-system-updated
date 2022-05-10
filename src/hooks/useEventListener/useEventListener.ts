import { useEffect, useRef } from "react";

interface Input {
  type: string;
  handler: (e?: Event) => void;
  element?: Window | HTMLElement | null;
  useCapture?: boolean; // If true, uses event capturing instead of bubbling
  shouldListen?: boolean; // Whether or not we should listen for events
}

export const useEventListener = ({
  type,
  handler,
  element = window,
  useCapture = false,
  shouldListen = true,
}: Input): void => {
  // Wrap handler in ref to avoid unnecessary re-renders
  const handlerRef = useRef<typeof handler | null>(null);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    // Make sure element supports addEventListener
    if (!element?.addEventListener) return;

    // Create event listener that calls handler function stored in ref
    const eventListener: EventListenerOrEventListenerObject = (event) =>
      handlerRef.current && handlerRef.current(event);

    if (shouldListen) {
      // Add event listener
      element.addEventListener(type, eventListener, useCapture);
    }

    // Remove event listener on cleanup
    return () => {
      element.removeEventListener(type, eventListener, useCapture);
    };
  }, [type, element, handlerRef, useCapture, shouldListen]);
};
