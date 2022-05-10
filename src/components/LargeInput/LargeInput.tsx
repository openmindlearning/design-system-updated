import * as styles from "./LargeInput.css";

import React, {
  CSSProperties,
  HTMLInputTypeAttribute,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Linkify from "react-linkify";
import { EyeClosedIcon, EyeOpenIcon } from "../../icons";
import { ClickableContentWrapper } from "../ClickableContentWrapper";
import classNames from "classnames";

export const SHOW_PASSWORD_ICON_LABEL = "show-password-icon";

interface Props {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  infoMessage?: string;
  errorMessage?: string | boolean;
  shouldAutoFocus?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  className?: string;
  style?: CSSProperties;
  value?: string;
  maxLength?: number;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  testLabel?: string;
  id?: string;

  /**
  Input Variants
  - default for default input states. 
  - error for error input states.
  */
  variant?: "default" | "error";
}

export const LargeInput = ({
  errorMessage,
  infoMessage,
  className,
  style,
  type = "text",
  placeholder,
  value,
  shouldAutoFocus,
  onChange,
  maxLength,
  onKeyDown,
  autoComplete,
  autoFocus,
  testLabel,
  id,
  variant = "default",
}: Props): React.ReactElement => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  variant = errorMessage ? "error" : variant;

  if (type === "password") {
    type = isShowingPassword ? "text" : "password";
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const selectionLocation = inputRef.current?.selectionStart || 0;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (shouldAutoFocus && inputRef && inputRef.current) {
      timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
    return () => timeout && clearTimeout(timeout);
  }, [shouldAutoFocus]);

  const focusPasswordInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(selectionLocation, selectionLocation);
    }
  };

  const toggleShowingPassword = () => {
    setIsShowingPassword(!isShowingPassword);
    // Putting focusPasswordInput in this timeout allows us to set the selection location so that the cursor
    // stays in the same place.
    setTimeout(focusPasswordInput, 0);
  };

  const inputId = id ? id : placeholder.replace(" ", "-");

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <label
        className={classNames(
          styles.placeholderVariant[variant],
          (isFocused || value) && styles.placeholderActiveVariant[variant],
          isFocused && styles.placeholderActiveFocusedVariant[variant],
        )}
        htmlFor={inputId}
      >
        {placeholder}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={classNames(styles.inputVariant[variant])}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          data-cy={testLabel}
          data-testid={testLabel}
          id={inputId}
          {...{
            autoFocus,
            autoComplete,
            onKeyDown,
            maxLength,
            value,
            onChange,
            type,
          }}
        />
        {(type === "password" || isShowingPassword) && (
          <ClickableContentWrapper
            className={styles.showPasswordIconContainer}
            onClick={toggleShowingPassword}
            dataTestId={SHOW_PASSWORD_ICON_LABEL}
            onMouseDown={(e: MouseEvent) => e.preventDefault()}
          >
            <div className={styles.showPasswordIcon}>
              {isShowingPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </div>
          </ClickableContentWrapper>
        )}
      </div>

      {infoMessage && <div className={styles.messageVariant.info}>{infoMessage}</div>}

      {errorMessage && (
        <div className={styles.messageVariant.error}>
          <Linkify
            componentDecorator={(href, text, key) => (
              <a href={href} key={key} target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            )}
          >
            {errorMessage}
          </Linkify>
        </div>
      )}
    </div>
  );
};
