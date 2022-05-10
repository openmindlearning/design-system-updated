interface IntersectionOptions {
    threshold?: number | number[];
    root?: HTMLElement | null;
    rootMargin?: string;
}
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
export declare const useIsOnScreen: ({ element, minimumIntersectionRatio, ...options }: {
    element?: HTMLElement | null | undefined;
    minimumIntersectionRatio?: number | undefined;
} & IntersectionOptions) => boolean;
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
export declare const useOnScreenRatio: ({ element, threshold, ...options }: {
    element?: HTMLElement | null | undefined;
    threshold: number | number[];
    options?: IntersectionOptions | undefined;
}) => number;
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
export declare const useInfiniteScroll: (onVisible: () => void, isActive: boolean) => (node: any) => void;
export {};
