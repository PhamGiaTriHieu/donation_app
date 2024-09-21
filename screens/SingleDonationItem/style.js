import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {baseTypography} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  container: {
    marginTop: horizontalScale(7),
    marginHorizontal: verticalScale(20),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightRegular,
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(22),
    color: '#000',
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});
