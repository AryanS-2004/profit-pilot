import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ThemeText = {
  // small
  xs: height * 0.01,
  s: height * 0.015,

  // medium small
  ms: height * 0.0175,

  // normal
  n: height * 0.02,

  // medium
  m: height * 0.025,

  // large
  l: height * 0.03,

  // xlarge
  xl: height * 0.035,

  // xxlarge
  xxl: height * 0.04,

  // xxxlarge
  xxxl: height * 0.05,

  // xxxlarge
  xxxxl: height * 0.065,
};
