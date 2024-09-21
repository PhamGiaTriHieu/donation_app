import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';
import {style} from './style';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {
  resetDonations,
  updateSelectedDonationId,
} from '../../redux/reducers/Donations';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);

  const donations = useSelector(state => state.donations);

  const dispatch = useDispatch();

  const [donationItems, setDonationItems] = useState([]);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations?.items?.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );

    setDonationItems(items);
  }, [categories.selectedCategoryId, donations.items]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );

    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={`${user?.firstName} ${user?.lastName}.👋`} />
            </View>
          </View>
          <Image
            source={{uri: user?.profileImage}}
            style={style.profileImage}
            resizeMode="contain"
          />
        </View>
        {/* Search */}
        <View style={style.searchBox}>
          <Search />
        </View>
        {/* Highlighted Image */}
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
        {/* Categories */}
        <View style={style.categoryHeader}>
          <Header title="Select Category" types={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prev => [...prev, ...newData]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => {
              return (
                <View style={style.categoryItem} key={item.categoryId}>
                  <Tab
                    tabId={item.categoryId}
                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                    title={item.name}
                    isInactive={
                      item.categoryId !== categories.selectedCategoryId
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        {/* Donations */}
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories?.categories?.find(
                item => item?.categoryId === categories?.selectedCategoryId,
              );

              return (
                <View
                  key={value.donationItemId}
                  style={style.SingleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        categoryInformation,
                      });
                    }}
                    badgeTitle={categoryInformation?.name}
                    donationTitle={value.name}
                    donationItemId={value.donationItemId}
                    price={parseFloat(value.price)}
                    uri={value.image}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
