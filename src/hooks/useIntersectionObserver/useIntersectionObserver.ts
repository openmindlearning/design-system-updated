import { useState, useEffect, useMemo, useCallback, useRef } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  root?: HTMLElement | null;
  rootMargin?: string;
}

/**
 * Create a memoized IntersectionObserver instance
 * that observes a single element on the page
 * @param {Object} element - the element to observe (i.e. as state or useCallbackRef)
 * @param {func} onObservation - callback (useCallback for stability) for when observer fires intersection event
 * @param {Object} options - configuration for observer, i.e. threshold, root, rootMargin
 * see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver for details
 */
const useIntersectionObserver = (
  onObservation: (entries: IntersectionObserverEntry[]) => void,
  element?: HTMLElement | null,
  options?: IntersectionOptions,
) => {
  // destructure relevant options to provide exhaustive deps to memo without passing referentially unstable options object
  const { threshold, root, rootMargin } = options || {};
  // use memo for referential stability but update when options change
  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => onObservation?.(entries), {
        threshold,
        root,
        rootMargin,
      }),
    [onObservation, threshold, root, rootMargin],
  );

  useEffect(() => {
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [observer, element]);
};

/**
 * Determine if a minimum proportion of an element is on the screen
 * @param {Object} element - the element to observe (i.e. as state or useCallbackRef)
 * @param {number} minimumIntersectionRatio - the exclusive minimum proportion of element
 * that must be on screen to return isOnScreen = true
 * Defaults to 0, so any nonzero amount qualifies as on screen
 * @param ...options - any additional configuration for intersection observer
 * (see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
 * @return {bool} - true if more than minimumIntersectionRatio% of element is on screen
 */
export const useIsOnScreen = ({
  element,
  minimumIntersectionRatio = 0,
  ...options
}: {
  element?: HTMLElement | null;
  minimumIntersectionRatio?: number;
} & IntersectionOptions): boolean => {
  const [isOnScreen, setIsOnScreen] = useState(true);

  const onObservation = useCallback(
    ([entry]) => setIsOnScreen(entry.intersectionRatio > minimumIntersectionRatio),
    [minimumIntersectionRatio],
  );

  useIntersectionObserver(onObservation, element, {
    threshold: minimumIntersectionRatio,
    ...options,
  });

  return isOnScreen;
};

// granularity at which to observe intersections
// i.e. 1/NUM_THRESHOLDS
const NUM_THRESHOLDS = 200;
const THRESHOLDS = [...Array(NUM_THRESHOLDS).keys()].map((num) => num / NUM_THRESHOLDS);

/**
 * Maintain the proportion of element that is visible on screen
 * @param {Object} element - the element to observe (i.e. as state or useCallbackRef)
 * @param {Array | number} threshold - proportions of element with on-screen visibility
 * at which to fire observation events (e.g. [.1, .2, .3, ..., .9, 1] fires observations each time 10% of the element enters/leaves screen
 * Defaults to THRESHOLDS above for finer granularity
 * ...options - any other options to pass to intersection observer (i.e. root, rootMargin)
 * (see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
 * @return {number} - the proportion [0, 1] of element that is on screen
 */
export const useOnScreenRatio = ({
  element,
  threshold = THRESHOLDS,
  ...options
}: {
  element?: HTMLElement | null;
  threshold: number | number[];
  options?: IntersectionOptions;
}): number => {
  const [ratio, setRatio] = useState(0);

  const onObservation = useCallback(([entry]) => setRatio(entry.intersectionRatio), []);

  useIntersectionObserver(onObservation, element, { threshold, ...options });

  return ratio;
};

/**
 * Returns a ref that can be attached to any DOM element. When that DOM element
 * scrolls into view it will trigger the `onVisible` callback.
 * @param {func} onVisible - callback that triggers when the ref'd element
 * is in the viewport
 * @param {boolean} isActive - whether to disable additional loads. If onThreshold
 * triggers a network request, `isActive` should be set to `false`.
 *
 * See https://dorshinar.me/create-react-infinite-scroll-hook#the-final-hook
 */
export const useInfiniteScroll = (onVisible: () => void, isActive: boolean) => {
  const observer = useRef<IntersectionObserver>();

  const callback = useCallback(
    (entries) => {
      if (entries.length === 0) {
        return;
      }

      if (entries[0].isIntersecting && isActive) {
        onVisible();
      }
    },
    [onVisible, isActive],
  );

  const infiniteScrollRef = useCallback(
    (node) => {
      if (!node) {
        return;
      }

      observer.current?.disconnect();

      observer.current = new IntersectionObserver(callback);
      observer.current.observe(node);
    },
    [callback],
  );
  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return infiniteScrollRef;
};
