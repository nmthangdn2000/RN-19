import { Dimensions, Animated } from 'react-native';
import React, { useRef } from 'react';
import { Assets, Text, View, Image } from 'react-native-ui-lib';
import ItemSlideSong from './ItemSlideSong';
// import Video from 'react-native-video';

const WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = 198;

const data = [
  {
    uriImage: Assets.slideSong.slideSong1,
    title: 'Pray For You',
    subtitile: 'The Weekend',
  },
  {
    uriImage: Assets.slideSong.slideSong2,
    title: 'Pray For You',
    subtitile: 'The Weekend',
  },
  {
    uriImage: Assets.slideSong.slideSong3,
    title: 'Pray For You',
    subtitile: 'The Weekend',
  },
  {
    uriImage: Assets.slideSong.slideSong4,
    title: 'Pray For You',
    subtitile: 'The Weekend',
  },
];

const ListHeaderComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View paddingV-20>
      <View row spread paddingH-24 paddingV-12>
        <Text title1b white>
          Geez
        </Text>
        <Image source={Assets.icons.search} />
      </View>
      <View row spread paddingH-24 paddingV-20>
        <Text title5b white>
          New Albums
        </Text>
        <Text b12 white>
          View all
        </Text>
      </View>
      <Animated.FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        contentContainerStyle={{ paddingHorizontal: (WIDTH - ITEM_SIZE) / 2 }}
        data={data}
        renderItem={({ item, index }) => (
          <ItemSlideSong item={item} index={index} scrollX={scrollX} />
        )}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
      />
      <View width={'100%'} height={120}>
        {/* <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }} // Can be a URL or a local file.
        /> */}
      </View>
      <View row spread paddingH-24 marginT-40>
        <Text title5b white>
          Geez Weekly
        </Text>
        {/* <View></View> */}
      </View>
    </View>
  );
};

export default ListHeaderComponent;
