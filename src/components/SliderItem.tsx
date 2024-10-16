import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ImageDataType} from '../utils/ImageData';

type Props = {
  item: ImageDataType;
  index: number;
};

const SliderItem = ({item}: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
      </View>

      {item.offer && (
        <View style={styles.offerBox}>
          <Text style={styles.offer}>{item.offer}</Text>
        </View>
      )}
      <View>
        <Text style={styles.title}>{item.title}</Text>
        {item.price && (
          <View style={styles.priceContainer}>
            <Text>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: 255.86,
    width: 138.57,
    marginRight: 10,
    marginTop: 12,
  },
  container: {
    borderRadius: 20,
    alignItems: 'center',
    height: 136.57,
    width: 136.57,
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: 103.34,
    height: 103.34,
    marginTop: 12,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    flexWrap: 'wrap',
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
  title: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
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
});

export default SliderItem;
