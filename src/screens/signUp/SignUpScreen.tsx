import { ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import {
  View,
  Assets,
  Text,
  Colors,
  Button,
  Typography,
} from 'react-native-ui-lib';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';
import CustomTextInput from '../../components/CustomTextInput';

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex>
      <ImageBackground
        source={Assets.background.brSignIn}
        style={styles.container}>
        <View padding-40>
          <Text title2b marginV-70 white on>
            SIGN UP
          </Text>
          <CustomTextInput placeholder="Name" icon={Assets.icons.icon_name} />
          <CustomTextInput icon={Assets.icons.email} placeholder="email" />
          <CustomTextInput
            password={true}
            placeholder="password"
            icon={Assets.icons.password_signin}
          />
          <Text
            n2
            style={styles.txtForgot}
            marginB-64
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password ?
          </Text>
          <Button
            label="SIGN UP"
            backgroundColor={Colors.primary}
            color={Colors.black}
            fullWidth
            labelStyle={Typography.b16}
            style={styles.btnSignIn}
            onPress={() => navigation.navigate('VerifyScreen')}
          />
          <Text
            n2
            white
            center
            marginT-20
            onPress={() => navigation.navigate('SignInScreen')}>
            SIGN IN
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLine: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderTopWidth: 1,
    borderColor: Colors.n2,
    height: 1,
    width: '33%',
  },
  txtForgot: {
    textAlign: 'right',
  },
  btnSignIn: {
    width: '100%',
    padding: 50,
    borderRadius: 4,
  },
});
