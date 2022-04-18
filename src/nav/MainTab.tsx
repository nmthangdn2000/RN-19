import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/explore/ExploreScreen';
import RadioScreen from '../screens/radio/RadioScreen';
import AccountScreen from '../screens/account/AccountScreen';
import { Colors, Image } from 'react-native-ui-lib';
import HomeScreen from '../screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.n2,
        tabBarStyle: {
          backgroundColor: Colors.b2,
          paddingBottom: 10,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image assetName="iconTabHome" tintColor={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image assetName="iconTabExplore" tintColor={color} />;
          },
        }}
      />
      <Tab.Screen
        name="RadioScreen"
        component={RadioScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image assetName="iconTabRadio" tintColor={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Image assetName="iconTabAccount" tintColor={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
