import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CloseIcon = (props: SvgProps) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 3 3 9M3 3l6 6"
      stroke="#485563"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CloseIcon;
