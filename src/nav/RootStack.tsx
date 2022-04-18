// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThroughwalkScreen from '../screens/throughwalk/ThroughwalkScreen';
import SignInScreen from '../screens/signIn/SignInScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import VerifyScreen from '../verify/VerifyScreen';
import MainApp from './MainTab';
import WeatherScreen from '../screens/weather/WeatherScreen';

export type RootStackParamList = {
  ThroughwalkScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPassword: undefined;
  VerifyScreen: undefined;
  MainApp: undefined;
  WeatherMap: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeatherMap">
        <Stack.Screen
          name="WeatherMap"
          component={WeatherScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThroughwalkScreen"
          component={ThroughwalkScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyScreen"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
