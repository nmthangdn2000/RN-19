import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import {
  View,
  Assets,
  Text,
  Image,
  Colors,
  Button,
  Typography,
} from 'react-native-ui-lib';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';
import CustomTextInput from '../../components/CustomTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex>
      <ImageBackground
        source={Assets.background.brSignIn}
        style={styles.container}>
        <View padding-40>
          <Text title2b marginV-70 white on>
            SIGN IN
          </Text>
          <CustomTextInput icon={Assets.icons.email} placeholder="email" />
          <CustomTextInput
            password={true}
            placeholder="password"
            icon={Assets.icons.password_signin}
          />
          <Text n2 style={styles.txtForgot} marginB-64 marginT-10>
            Forgot Password ?
          </Text>
          <Button
            label="SIGN IN"
            backgroundColor={Colors.primary}
            color={Colors.black}
            fullWidth
            labelStyle={Typography.b16}
            style={styles.btnSignIn}
            onPress={() => navigation.navigate('MainApp')}
          />
          <View style={styles.viewLine} marginT-136>
            <View style={styles.line} />
            <Text b11 n2>
              Or connect with
            </Text>
            <View style={styles.line} />
          </View>
          <View style={styles.viewSocial} marginT-20>
            <TouchableOpacity>
              <Image source={Assets.icons.facebook} marginH-5 />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Assets.icons.google_plus} marginH-5 />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Assets.icons.twitter} marginH-5 />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView>
          <View center>
            <Text white>
              Don't have an account?{' '}
              <Text
                primary
                b14
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}>
                Sign Up
              </Text>
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

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
