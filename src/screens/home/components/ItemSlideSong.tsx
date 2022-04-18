import { Animated, ImageSourcePropType, StyleSheet } from 'react-native';
import React from 'react';
import { Image, Text, View } from 'react-native-ui-lib';

interface Props {
  item: Params;
  index: number;
  scrollX: Animated.Value;
}

interface Params {
  uriImage: ImageSourcePropType;
  title: string;
  subtitile: string;
}

const ITEM_SIZE = 198;

const ItemSlideSong = ({ item, index, scrollX }: Props) => {
  const { uriImage, title, subtitile } = item;

  const inputRange = [
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 1, 0.7],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <Image style={styles.imgCover} source={uriImage} blurRadius={15} />
      <Image style={styles.img} source={uriImage} />
      <View bottom absB paddingH-16 paddingV-28>
        <Text b16 white>
          {title}
        </Text>
        <Text r12 white>
          {subtitile}
        </Text>
      </View>
    </Animated.View>
  );
};

export default ItemSlideSong;

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    padding: 10,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  imgCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 11,
    left: 11,
    zIndex: -11,
    borderRadius: 8,
    opacity: 0.6,
  },
});
