import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable, TextInput} from 'react-native';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {style} from './style';
import {scaleFontSize} from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const Search = props => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        placeholder="search"
        onChangeText={value => handleSearch(value)}
        value={search}
      />
    </Pressable>
  );
};
Search.defaultProps = {
  onSearch: () => {},
};
Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
