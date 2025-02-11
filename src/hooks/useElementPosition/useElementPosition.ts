import { useCallback, useState, RefObject } from "react";
import { useEventListener } from "../useEventListener";

interface Position {
  x: number;
  y: number;
}

export const useElementPosition = (
  element: RefObject<HTMLElement>,
): { position: Position; updateRefPosition: () => void } => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const updateRefPosition = useCallback(() => {
    if (element.current) {
      const { x, y } = element.current.getBoundingClientRect();
      setPosition({ x, y });
    }
  }, [element]);
  if (!loaded && element.current) {
    updateRefPosition();
    setLoaded(true);
  }
  useEventListener({ type: "resize", handler: updateRefPosition });
  useEventListener({ type: "scroll", handler: updateRefPosition, useCapture: true });
  return { position, updateRefPosition };
};
