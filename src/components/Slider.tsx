import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import SliderItem from './SliderItem';
import NonSliderItem from './NonSliderItem';
import ImageSliders from './ImageSliders';
import {
  CookingIdeas,
  DailyFreshNeeds,
  HotDeals,
  ImageSlider,
  ShopByCategoryImages,
  ShopByStore,
} from '../utils/ImageData';
// import BottomSheet from './BottomSheet';

const placeholders = [
  'search "paneer"',
  'search "curd"',
  'search "chocolate"',
  'search "rice"',
  'search "chips"',
  'search "eggs"',
  'search "milk"',
  'search "butter"',
];

const Slider = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [fadeAnim]);

  useEffect(() => {
    setIsModalOpen(true);
  }, [isModalOpen]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.delivery}>
          <Text style={styles.heading} onPress={() => setIsModalOpen(true)}>
            Delivery in 9 minutes
          </Text>
          <Text>Gurugram, Haryana, India</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.searchBar} placeholder="" />
          <Animated.Text style={[styles.placeholderText, {opacity: fadeAnim}]}>
            {placeholders[placeholderIndex]}
          </Animated.Text>
        </View>
      </View>

      <View style={styles.bestSellers}>
        <Text style={styles.bestSellersHeading}>Best Seller</Text>
        <Text style={styles.seeAll}>see all</Text>
      </View>

      <FlatList
        data={ImageSlider}
        renderItem={({item, index}) => <SliderItem item={item} index={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.items}
      />

      <View>
        <Text style={styles.categories}>Shop By Category</Text>
      </View>

      <FlatList
        data={ShopByCategoryImages}
        renderItem={({item, index}) => (
          <NonSliderItem item={item} index={index} />
        )}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
      />

      <View>
        <Text style={styles.categories}>Shop By Store</Text>
      </View>

      <FlatList
        data={ShopByStore}
        renderItem={({item, index}) => (
          <ImageSliders item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <View>
        <Text style={styles.categories}>Hot Deals</Text>
      </View>

      <FlatList
        data={HotDeals}
        renderItem={({item, index}) => <SliderItem item={item} index={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <View>
        <Text style={styles.categories}>Daily Fresh Needs</Text>
      </View>

      <FlatList
        data={DailyFreshNeeds}
        renderItem={({item, index}) => (
          <ImageSliders item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <View>
        <Text style={styles.categories}>Cooking Ideas</Text>
      </View>

      <FlatList
        data={CookingIdeas}
        renderItem={({item, index}) => (
          <ImageSliders item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.items}
      />

      {/* <BottomSheet
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </ScrollView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
  },
  delivery: {
    flexDirection: 'column',
    width: '70%',
  },
  heading: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Okra',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    borderWidth: 1,
    borderRadius: 22,
  },
  searchIcon: {
    fontSize: 24,
    marginRight: 8,
    left: 6,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
  },
  searchBar: {
    flex: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  placeholderText: {
    position: 'absolute',
    left: 3,
    top: 10,
    fontSize: 16,
    color: '#aaa',
  },
  bestSellers: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
  },
  bestSellersHeading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  seeAll: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 15,
  },
  items: {
    width: '100%',
    height: 240,
  },
  categories: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginBottom: 12,
  },
});
