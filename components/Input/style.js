import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  label: {
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightRegular,
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455A',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
});
