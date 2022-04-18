import { Typography } from 'react-native-ui-lib';

const fonts = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
};

Typography.loadTypographies({
  title1b: { fontSize: 48, fontFamily: fonts.bold },
  title2b: { fontSize: 36, fontFamily: fonts.bold },
  title3b: { fontSize: 28, fontFamily: fonts.bold },
  title3m: { fontSize: 28, fontFamily: fonts.medium },
  title4r: { fontSize: 28, fontFamily: fonts.regular },
  title5b: { fontSize: 22, fontFamily: fonts.bold },

  r16: { fontSize: 16 },
  r14: { fontSize: 14 },
  r12: { fontSize: 12 },
  b16: { fontSize: 16, fontFamily: fonts.bold },
  b14: { fontSize: 14, fontFamily: fonts.bold },
  b12: { fontSize: 12, fontFamily: fonts.bold },
  b11: { fontSize: 11, fontFamily: fonts.bold },
});
