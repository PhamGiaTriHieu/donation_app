import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import {globalStyle} from '../../assets/styles/globalStyle';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Hieu Pham" types={1} />
      <Badge title="test" />
      <FontAwesomeIcon icon={faSearch} />
    </SafeAreaView>
  );
};

export default Home;
