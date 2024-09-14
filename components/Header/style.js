import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  title1: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(24),
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: scaleFontSize(29),
    // color: '#022150',
  },
  title2: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(18),
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(16),
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: scaleFontSize(19),
  },
});
