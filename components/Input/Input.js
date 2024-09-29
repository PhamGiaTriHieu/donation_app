import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import {style} from './style';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ?? null}
        style={style.input}
        value={value}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={textValue => {
          setValue(textValue);
          props.onChangeText(textValue);
        }}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default Input;
