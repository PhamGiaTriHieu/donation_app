import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {style} from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);

  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={event => setWidth(event?.nativeEvent?.lines[0]?.width)}
        style={[style.title]}
        ref={textRef}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
