import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text} from 'react-native';
import {style} from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);

  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      disabled={props.isInactive}
      style={[style.tab, props.isInactive && style.isInactiveTab, tabWidth]}
      onPress={() => props.onPress()}>
      <Text
        onTextLayout={event => setWidth(event?.nativeEvent?.lines[0]?.width)}
        style={[style.title, props.isInactive && style.isInactiveTitle]}
        ref={textRef}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.default = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
