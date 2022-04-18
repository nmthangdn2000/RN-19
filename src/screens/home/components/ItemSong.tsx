import React from 'react';
import { Assets, Image, Text, View } from 'react-native-ui-lib';

interface Props {
  item: {
    title: string;
    subtitle: string;
  };
  index: number;
}

const ItemSong = ({ item, index }: Props) => {
  return (
    <View row spread centerV paddingH-24 paddingV-12>
      <Text r14 white>
        {index < 10 ? `0${index}` : index}
      </Text>
      <View row flexG paddingH-20 centerV>
        <Image source={Assets.background.bgItemSong} marginR-20 />
        <View>
          <Text r16 white>
            {item.title}
          </Text>
          <Text r12 hintText>
            {item.subtitle}
          </Text>
        </View>
      </View>
      <Image source={Assets.icons.more_horiz} />
    </View>
  );
};

export default ItemSong;
