import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SearchIcon = (props: any) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_4_289)">
      <Path
        d="M12.0833 18.4167C16.1334 18.4167 19.4167 15.1334 19.4167 11.0833C19.4167 7.03325 16.1334 3.75 12.0833 3.75C8.03325 3.75 4.75 7.03325 4.75 11.0833C4.75 15.1334 8.03325 18.4167 12.0833 18.4167Z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.25 21.25L17.2625 17.2625"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_289">
        <Rect width={22} height={22} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SearchIcon;
