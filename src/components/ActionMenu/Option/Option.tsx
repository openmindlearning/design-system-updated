import React, { ReactElement } from "react";
import { ClickableContentWrapper } from "../../ClickableContentWrapper";
import * as styles from "./Option.css";

interface Props {
  children: ReactElement;
  onClick: () => void;
  dataTestId?: string;
}

export const Option = ({ children, onClick, dataTestId }: Props): ReactElement => (
  <ClickableContentWrapper className={styles.option} onClick={onClick} dataTestId={dataTestId}>
    {children}
  </ClickableContentWrapper>
);
