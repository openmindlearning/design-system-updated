import React, { ReactElement, useEffect, useRef, useState } from "react";
import * as styles from "./ActionMenu.css";
import { useElementPosition } from "../../hooks/useElementPosition";
import { ClickableContentWrapper } from "../ClickableContentWrapper";
import { ClickOuterWrapper } from "../ClickOuterWrapper";
import { ThreeDotsHorizontalGray } from "../../icons/base/ThreeDotHorizontalGray";
import { useIsOnScreen } from "../../hooks/useIntersectionObserver";
import { ThemeProvider } from "../../themes";
import { Portal } from "react-portal";

interface Props {
  children: React.ReactNode;
  openMenuElement?: React.ReactElement;
  defaultOpen?: boolean;
}

export const ACTION_MENU_OPEN_MENU_ELEMENT_LABEL = "action-menu-open-menu-element-label";
export const ACTION_MENU_OPEN_LABEL = "action-menu-open-label";

export const ActionMenu = ({
  children,
  openMenuElement,
  defaultOpen,
}: Props): React.ReactElement => {
  const openButtonRef = useRef<HTMLElement>(null);
  const position = useElementPosition(openButtonRef);
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
  return (
    <>
      <ClickableContentWrapper
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                className={styles.dropdown}
                style={{
                  position: "fixed",
                  top: position.y + (refElementHeight || 0),
                  left: position.x,
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
