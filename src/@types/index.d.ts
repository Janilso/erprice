type StackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: undefined;
};

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
