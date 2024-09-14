import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(16),
    fontWeight: baseTypography.fontWeightMedium,
    lineHeight: scaleFontSize(29),
    color: '#FFF',
    textAlign: 'center',
  },
});
