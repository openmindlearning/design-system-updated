import * as styles from "./Tabs.css";

import React from "react";

import { ClickableContentWrapper } from "../ClickableContentWrapper";

export interface Tab {
  // value to be displayed
  title: string;
  // optional (unrendered) value - could be an id or key to fetch/filter something for ex.
  value?: string;
}

interface Props {
  tabs: Tab[];
  selection: Tab;
  setSelection: (tab: Tab) => void;
}

export const TABS_TEST_ID_PREFIX = "design-system-tabs-";

export const Tabs = ({ tabs, selection, setSelection }: Props): React.ReactElement => {
  return (
    <menu className={styles.menu}>
      {tabs.map((tab) => {
        const tabStyle = tab.title === selection.title ? "selected" : "unselected";
        return (
          <li key={tab.title} className={styles.li}>
            <ClickableContentWrapper
              onClick={() => setSelection(tab)}
              className={styles.tab[tabStyle]}
              dataTestId={`${TABS_TEST_ID_PREFIX}${tab.title}`}
            >
              {tab.title}
            </ClickableContentWrapper>
          </li>
        );
      })}
    </menu>
  );
};
