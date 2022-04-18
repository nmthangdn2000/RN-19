import { Animated, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import {
  Assets,
  Button,
  Colors,
  Text,
  Typography,
  View,
} from 'react-native-ui-lib';
import CustomTextInput from '../../components/CustomTextInput';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';

const WIDTH = Dimensions.get('screen').width;

const ForgotPassword = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex backgroundColor={Colors.b1} padding-40>
      <Text title2b marginV-28 white on>
        Forgot Password?
      </Text>
      <Text marginB-90>
        If you need help resetting your password,{'\n'} we can help by sending
        you a link to{'\n'} reset it.
      </Text>
      <Animated.View style={{ flexDirection: 'row' }}>
        <View style={styles.viewInput}>
          <CustomTextInput icon={Assets.icons.email} placeholder="Email" />
        </View>
        <View style={styles.viewInput}>
          <CustomTextInput
            icon={Assets.icons.password_signin}
            placeholder="Password"
            password={true}
          />
          <CustomTextInput
            icon={Assets.icons.password_signin}
            placeholder="Confirm Password"
            password={true}
          />
        </View>
      </Animated.View>
      <Button
        label="SIGN IN"
        backgroundColor={Colors.primary}
        color={Colors.black}
        fullWidth
        labelStyle={Typography.b16}
        style={styles.btnSignIn}
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  viewInput: {
    width: WIDTH,
    height: 200,
  },
  btnSignIn: {
    width: '100%',
    padding: 50,
    borderRadius: 4,
  },
});
