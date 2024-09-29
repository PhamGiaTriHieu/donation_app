import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import {style} from './style';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}
      onPress={() => props.onPress()}>
      {props.isLoading ? (
        <ActivityIndicator animating={props.isLoading} />
      ) : (
        <Text style={style.title}>{props.title}</Text>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;
