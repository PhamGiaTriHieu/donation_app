import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },

  title: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(10),
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: scaleFontSize(12),
    color: '#FFF',
    textAlign: 'center',
  },
});
