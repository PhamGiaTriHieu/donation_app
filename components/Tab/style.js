import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  isInactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(14),
    fontWeight: baseTypography.fontWeightMedium,
    lineHeight: scaleFontSize(17),
    color: '#FFF',
    textAlign: 'center',
  },
  isInactiveTitle: {
    color: '#79869F',
  },
});
