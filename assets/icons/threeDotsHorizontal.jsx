import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const ThreeDotsHorizontal = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M18 8V8.00635M12 8V8.00635M6 8L6 8.00635M18 15.9937V16M12 15.9937V16M6 15.9937L6 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ThreeDotsHorizontal;