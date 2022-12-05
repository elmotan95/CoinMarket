import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
  backgroundColor?: string;
};

const Spacer = ({size = 0, horizontal = false, backgroundColor = 'transparent'}: SpacerProps) => {
  return (
    <View
      style={{
        [horizontal ? 'width' : 'height']: size,
        backgroundColor,
      }}
    />
  );
};

export default Spacer;
