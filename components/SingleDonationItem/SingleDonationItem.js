import React from 'react';
import {View, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {style} from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="cover"
          source={{uri: props.uri}}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          types={3}
          color="#0A043C"
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={`$${props.price.toFixed(2)}`}
            types={3}
            color="#156CF7"
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  donationItemId: PropTypes.number.isRequired,
};

export default SingleDonationItem;
