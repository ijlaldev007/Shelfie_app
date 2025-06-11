import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

const ChevronRightIcon: React.FC<IconProps> = ({
  size = 16,
  color = '#F2B705',
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
  >
    <Path
      d="M6 12L10 8L6 4"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronRightIcon;
