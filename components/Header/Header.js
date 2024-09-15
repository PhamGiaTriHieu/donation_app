import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types'; // ES6
import {style} from './style';

const Header = props => {
  // Warning default props ...
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  // End warning default props ...
  const styleToApply = () => {
    switch (props.types) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), props?.color && {color: props.color}]}>
        {props.title}
      </Text>
    </View>
  );
};

Header.defaultProps = {
  title: '',
  types: 1,
  color: '#000',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  types: PropTypes.number,
  color: PropTypes.string,
};

export default Header;
