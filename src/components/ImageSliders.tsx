import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ImageDataType} from '../utils/ImageData';

type Props = {
  item: ImageDataType;
  index: number;
};

const ImageSliders = ({item}: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Image source={item.image} style={styles.image} />

      {item.offer && (
        <View style={styles.offerBox}>
          <Text style={styles.offer}>{item.offer}</Text>
        </View>
      )}
      <Text>{item.description}</Text>
      {item.price && (
        <View style={styles.priceContainer}>
          <Text>{item.price}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.add}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImageSliders;

const styles = StyleSheet.create({
  outerContainer: {
    width: 136.56,
    height: 210.56,
    marginRight: 12,
  },
  image: {
    width: 126.56,
    height: 126.56,
    borderRadius: 20,
  },
  offerBox: {
    position: 'absolute',
  },
  offer: {
    width: 30,
    marginLeft: 12,
    backgroundColor: '#808080',
    color: '#ffff',
    marginTop: 1,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    opacity: 1,
    borderWidth: 1.5,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 5,
    borderColor: 'green',
  },
  add: {
    color: 'green',
  },
});
