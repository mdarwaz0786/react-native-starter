import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationsScreen from '../../Screens/Notifications/NotificationsScreen.js';
import AuthTopTab from '../TopTab/AuthTopTab.js';
import HomeStack from '../Stack/HomeStack.js';
import { useNavigation } from '@react-navigation/native';
import SettingsStack from '../Stack/SettingsStack.js';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  const resetToCurrentTab = (routeName) => (e) => {
    e.preventDefault();
    navigation.reset({
      index: 0,
      routes: [{ name: routeName }],
    });
  };

  const icons = {
    Home: 'home-outline',
    Settings: 'settings-outline',
    Register: 'person-outline',
    Notifications: 'notifications-outline',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = icons[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#A63ED3',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
          backgroundColor: '#fff',
          paddingBottom: 10,
          paddingTop: 5,
          paddingEnd: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        listeners={{ tabPress: resetToCurrentTab('Home') }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        listeners={{ tabPress: resetToCurrentTab('Settings') }}
      />
      <Tab.Screen
        name="Register"
        component={AuthTopTab}
        listeners={{ tabPress: resetToCurrentTab('Register') }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        listeners={{ tabPress: resetToCurrentTab('Notifications') }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
