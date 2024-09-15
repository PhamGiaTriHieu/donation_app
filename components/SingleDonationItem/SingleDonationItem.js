import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {style} from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="contain"
          source={{uri: props.uri}}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} types={3} color="#0A043C" />
        <View style={style.price}>
          <Header
            title={`$${props.price.toFixed(2)}`}
            types={3}
            color="#156CF7"
          />
        </View>
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
