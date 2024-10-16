import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {ImageDataType} from '../utils/ImageData';

type Props = {
  item: ImageDataType;
  index: number;
};

const NonSliderItem = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 91,
    height: 125.89,
    marginBottom: 28,
    marginRight: 11,
  },
  innerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 15,
    backgroundColor: 'rgb(204 251 241)',
  },
  image: {
    width: 60,
    height: 100,
  },
  description: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default NonSliderItem;
