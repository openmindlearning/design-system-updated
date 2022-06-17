import { useEffect, useRef, useMemo, MutableRefObject, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Any React Portal used in the app will cause useClickOuter to close whatever element it
 * wraps. If you want to exclude a React Portal so it will not cause onOutsideClick
 * to be called, you can add the data-ignore-click-outside attribute to the React Portal.
 */
function isExcludedFromClickOutside(element: HTMLElement): boolean {
  if (element.getAttribute && element.getAttribute("data-ignore-click-outside")) {
    return true;
  }

  element.parentNode;
  return !!(element.parentElement && isExcludedFromClickOutside(element.parentElement));
}

/*
 * @desc - hook to create ref that detects clicks outside of its element
 * @param {bool} isActive - whether should be detecting and acting upon clicks
 * @param {func} onOutsideClick - event handler for when a click outside is detected
 * @param {ref} ...exceptions - any number of refs attached as additional individual params
 * Each will be ignored even if they are outside element and would otherwise trigger event
 * @return {ref} - the newly created ref that will detect clicks outside whatever it's attached to
 */

const useSavedHandler = (handler: (e?: Event) => void) => {
  // Create a ref that stores handler
  const savedHandler = useRef<(e?: Event) => void>();

  // Update ref.current value if handler changes
  // This allows an effect to always have latest handler
  // without needing to pass into deps array
  // and potentially cause effect to re-run every render
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  return savedHandler;
};

export const useClickOuter = (
  isActive: boolean,
  onOutsideClick: () => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...exceptions: MutableRefObject<any>[]
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
MutableRefObject<any> => {
  const savedHandler = useSavedHandler(onOutsideClick);
  const element = useRef<HTMLElement>();
  // elements to ignore: at least the attached ref, and any given exceptions

  // check if any element including exceptions contains click
  const isInWrapper = useCallback(
    (target: HTMLElement) => {
      const ignoredElements = [element, ...exceptions];

      // Used to stop React Portal's from causing the onOutsideClick to be triggered
      if (isExcludedFromClickOutside(target)) {
        return true;
      }

      for (const ref of ignoredElements) {
        if (ref?.current?.contains(target)) {
          return true;
        }
      }
      return false;
    },
    [exceptions],
  );

  const handleClick = useCallback(
    (e: Event) => {
      // perform outside click func if active and click is outside exceptions
      const { target } = e;
      if (isActive && !isInWrapper(target as HTMLElement) && savedHandler.current) {
        savedHandler.current(e);
      }
    },
    [isActive, isInWrapper, savedHandler],
  );

  useEffect(() => {
    // add event listener
    document.addEventListener("mousedown", handleClick);

    // remove listener on dismount or isActive change
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleClick]);

  // return the created ref so component can attach where desired in props
  return element;
};

/*
 * @desc - detect clicks outside a container, or on the root container itself
 * All children of the container are excepted, thus it's the "white space" in container that fires event
 * @param {bool} isActive - whether should be detecting and acting upon clicks
 * @param {func} onOutsideClick - event handler for when a click outside is detected
 * @param {func} customDetector - optional func given event target returns true if should fire event
 * @param {ref} ...exceptions - any number of ignored refs attached as additional individual params
 * @return {Object} - { ref, onClick, id } spread into props of desired container to use listener
 */
export const useClickWhiteSpace = (
  isActive: boolean,
  onWhiteSpaceClick: () => void,
  customDetector: (target: HTMLElement) => boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...exceptions: MutableRefObject<any>[]
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
{ ref: MutableRefObject<any>; onClick: (e: Event) => void; id: string } => {
  const ref = useClickOuter(isActive, onWhiteSpaceClick, ...exceptions);
  const savedHandler = useSavedHandler(onWhiteSpaceClick);

  const id = useMemo(() => uuidv4(), []);

  const shouldFire = (target: HTMLElement) => {
    const customDetected = !!(customDetector && customDetector(target));
    return isActive && (customDetected || target.id === id) && savedHandler.current;
  };

  const internalClick = (e: Event) => {
    const { target } = e;
    if (shouldFire(target as HTMLElement)) {
      savedHandler.current && savedHandler.current();
    }
  };

  return { ref, onClick: internalClick, id };
};
