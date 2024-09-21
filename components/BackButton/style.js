import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
