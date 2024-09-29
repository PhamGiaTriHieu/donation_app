import {StyleSheet} from 'react-native';
import {verticalScale} from './scaling';

export const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFF',
  },
  flex: {
    flex: 1,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});
