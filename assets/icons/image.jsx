import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const Image = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M22 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M6 20C9.68373 16.4365 13.8235 11.7106 20 15.2551" stroke="currentColor" strokeWidth="1.5" />
    <Path d="M2 4L14 4C16.8284 4 18.2426 4 19.1213 4.87868C20 5.75736 20 7.17157 20 10L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <Circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Image;
