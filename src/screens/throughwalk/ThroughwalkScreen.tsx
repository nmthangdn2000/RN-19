import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import {
  View,
  Text,
  Colors,
  Button,
  Typography,
  Assets,
} from 'react-native-ui-lib';
import { RootStackParamList } from '../../nav/RootStack';

function ThroughwalkScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex>
      <ImageBackground
        source={Assets.background.bgThroughwalk}
        style={styles.container}>
        <Text title3b white center marginB-10>
          WELCOME TO {'\n'} GEEZ APP
        </Text>
        <Text r14 white center>
          Make your design workflow easier and {'\n'}save your time
        </Text>

        <View absB centerH paddingV-50 paddingH-40 width={'100%'}>
          <Button
            label="GET STARTED"
            backgroundColor={Colors.primary}
            color={Colors.black}
            fullWidth
            labelStyle={Typography.b14}
            style={{ width: '100%', padding: 50, borderRadius: 4 }}
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default ThroughwalkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
});
