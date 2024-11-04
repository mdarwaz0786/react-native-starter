import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../../Screens/Auth/LoginScreen.js';
import SignupScreen from '../../Screens/Auth/SignupScreen.js';

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: '500', color: '#fff' },
        tabBarStyle: { backgroundColor: '#A63ED3' },
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
      />
    </Tab.Navigator>
  );
};

export default AuthTopTab;