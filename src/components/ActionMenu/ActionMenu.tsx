import React, { ReactElement, useEffect, useRef, useState } from "react";
import * as styles from "./ActionMenu.css";
import { useElementPosition } from "../../hooks/useElementPosition";

import { ClickableContentWrapper } from "../ClickableContentWrapper";
import { ClickOuterWrapper } from "../ClickOuterWrapper";
import { ThreeDotsHorizontalGray } from "../../icons/base";
import { useIsOnScreen } from "../../hooks/useIntersectionObserver";
import { ThemeProvider } from "../../themes";
import { Portal } from "react-portal";
import classnames from "classnames";

interface Props {
  children: React.ReactNode;
  openMenuElement?: React.ReactElement;
  defaultOpen?: boolean;
  expandDirection?: "left" | "right";
  top?: number;
  left?: number;
  right?: number;
  className?: string;
}

export const ACTION_MENU_OPEN_MENU_ELEMENT_LABEL = "action-menu-open-menu-element-label";
export const ACTION_MENU_OPEN_LABEL = "action-menu-open-label";

export const ActionMenu = ({
  children,
  openMenuElement,
  defaultOpen,
  expandDirection = "right",
  top = 0,
  left = 0,
  right = 0,
  className = "",
}: Props): React.ReactElement => {
  const openButtonRef = useRef<HTMLElement>(null);
  const { position, updateRefPosition } = useElementPosition(openButtonRef);
  const [isMenuOpen, setIsMenuOpen] = useState(defaultOpen);
  const isOnScreen = useIsOnScreen({ element: openButtonRef.current });

  useEffect(() => {
    if (!isOnScreen) {
      setIsMenuOpen(false);
    }
  }, [isOnScreen]);

  const openMenuDisplayElement: ReactElement = openMenuElement || (
    <ThreeDotsHorizontalGray width={12} height={14} />
  );
  const refElementHeight = openButtonRef.current?.getBoundingClientRect().height;
  const refElementRight = openButtonRef.current?.getBoundingClientRect().right;

  return (
    <>
      <ClickableContentWrapper
        onClick={() => {
          updateRefPosition();
          setIsMenuOpen(!isMenuOpen);
        }}
        dataTestId={ACTION_MENU_OPEN_MENU_ELEMENT_LABEL}
      >
        <span ref={openButtonRef}>{openMenuDisplayElement}</span>
      </ClickableContentWrapper>
      {isMenuOpen && (
        <Portal>
          <ThemeProvider>
            <ClickOuterWrapper
              isOpen={true}
              onOutsideClick={() => setIsMenuOpen(false)}
              exceptions={[openButtonRef]}
            >
              <div
                className={classnames([styles.dropdown, className])}
                style={{
                  position: "fixed",
                  top: position.y + (refElementHeight || 0) + top,
                  ...(expandDirection === "right"
                    ? { left: position.x + left }
                    : { right: `calc(100vw - ${refElementRight || 0 + right}px)` }),
                }}
                onClick={() => setIsMenuOpen(false)}
                data-testid={ACTION_MENU_OPEN_LABEL}
              >
                {children}
              </div>
            </ClickOuterWrapper>
          </ThemeProvider>
        </Portal>
      )}
    </>
  );
};
