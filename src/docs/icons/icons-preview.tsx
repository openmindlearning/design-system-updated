import * as styles from "./icons-preview.css";

import React from "react";
import * as baseIcons from "../../icons/base";
import * as reactionIcons from "../../icons/reaction";
import * as socialIcons from "../../icons/social";
import * as logoIcons from "../../icons/logo";

export const IconsPreview = (): React.ReactElement => {
  return (
    <>
      <div className={styles.title}>Base</div>
      <div className={styles.container}>
        {Object.entries(baseIcons).map(([name, Icon]) => (
          // TODO: once we have a tooltip component in the DS, add that tooltip
          // here instead of using the html title attribute
          <div key={name} title={name} className={styles.icon} onClick={() => console.log(name)}>
            <Icon />
          </div>
        ))}
      </div>
      <div className={styles.title}>Reactions</div>
      <div className={styles.container}>
        {Object.entries(reactionIcons).map(([name, Icon]) => (
          <div key={name} title={name} className={styles.icon} onClick={() => console.log(name)}>
            <Icon />
          </div>
        ))}
      </div>

      <div className={styles.title}>Social</div>
      <div className={styles.container}>
        {Object.entries(socialIcons).map(([name, Icon]) => (
          <div key={name} title={name} className={styles.icon} onClick={() => console.log(name)}>
            <Icon />
          </div>
        ))}
      </div>

      <div className={styles.title}>Logo</div>
      <div className={styles.container}>
        {Object.entries(logoIcons).map(([name, Icon]) => (
          <div key={name} title={name} className={styles.icon} onClick={() => console.log(name)}>
            <Icon />
          </div>
        ))}
      </div>
    </>
  );
};
