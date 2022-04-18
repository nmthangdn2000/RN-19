import { Animated, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import EnterPhone from './components/EnterPhone';
import { Colors, View } from 'react-native-ui-lib';
import EnterCode from './components/EnterCode';

const WIDTH = Dimensions.get('window').width;

const VerifyScreen = () => {
  const translateX = new Animated.Value(0);
  return (
    <View flex backgroundColor={Colors.b1}>
      <Animated.View
        style={{
          flexDirection: 'row',
          width: WIDTH * 2,
          transform: [{ translateX }],
        }}>
        <EnterPhone
          onContinue={() => {
            Animated.timing(translateX, {
              duration: 500,
              toValue: -WIDTH,
              useNativeDriver: true,
            }).start();
          }}
        />
        <EnterCode />
      </Animated.View>
    </View>
  );
};

export default VerifyScreen;
