import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const MessagingIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M10.4 2.40002C5.54001 2.40002 1.60001 5.98162 1.60001 10.4C1.60001 12.6693 2.64651 14.7102 4.31719 16.1641C4.07756 16.9489 3.57769 17.7294 2.65938 18.425C2.65886 18.4255 2.65834 18.4261 2.65782 18.4266C2.58208 18.4554 2.51687 18.5065 2.47083 18.5732C2.42479 18.6399 2.40009 18.719 2.40001 18.8C2.40001 18.9061 2.44215 19.0079 2.51716 19.0829C2.59218 19.1579 2.69392 19.2 2.80001 19.2C2.82734 19.1997 2.85456 19.1965 2.88126 19.1907C4.43331 19.1861 5.75756 18.5232 6.81094 17.6922C7.31082 17.8955 7.83262 18.0632 8.37657 18.1797C8.13337 17.4917 8.00001 16.7592 8.00001 16C8.00001 12.0296 11.5888 8.80002 16 8.80002C17.1056 8.80002 18.1596 9.00314 19.1188 9.37034C18.562 5.43914 14.8752 2.40002 10.4 2.40002ZM16 10.4C14.3026 10.4 12.6748 10.99 11.4745 12.0402C10.2743 13.0904 9.60001 14.5148 9.60001 16C9.60001 17.4852 10.2743 18.9096 11.4745 19.9598C12.6748 21.01 14.3026 21.6 16 21.6C16.8183 21.5989 17.6288 21.4605 18.3875 21.1922C19.3686 21.8776 20.5559 22.3859 21.9156 22.3907C21.9433 22.3968 21.9716 22.3999 22 22.4C22.1061 22.4 22.2078 22.3579 22.2829 22.2829C22.3579 22.2079 22.4 22.1061 22.4 22C22.3999 21.9182 22.3746 21.8383 22.3277 21.7713C22.2808 21.7042 22.2144 21.6532 22.1375 21.625C21.4054 21.0692 20.9361 20.4573 20.6547 19.8344C21.7732 18.7973 22.3974 17.426 22.4 16C22.4 14.5148 21.7257 13.0904 20.5255 12.0402C19.3253 10.99 17.6974 10.4 16 10.4Z"
        fill="#545454"
      />
    </svg>
  );
};
