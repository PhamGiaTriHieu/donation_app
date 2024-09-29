import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {baseTypography} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  error: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: baseTypography.fontFamily,
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: verticalScale(24),
  },
});
