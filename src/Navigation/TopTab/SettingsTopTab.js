// SettingsTab.js
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SettingsScreen from "../../Screens/Settings/SettingsScreen.js";
import ProfileSettingsScreen from "../../Screens/Settings/ProfileSettingScreen.js";
import AccountSettingsScreen from "../../Screens/Settings/AccountSettingScreen.js";

const Top = createMaterialTopTabNavigator();

const SettingsTopTab = () => {
  return (
    <Top.Navigator
      initialRouteName="GeneralSettings"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: '500', color: '#fff' },
        tabBarStyle: { backgroundColor: '#A63ED3' },
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
      }}
    >
      <Top.Screen
        name="GeneralSettings"
        component={SettingsScreen}
        options={{ title: 'General' }}
      />
      <Top.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
        options={{ title: 'Profile' }}
      />
      <Top.Screen
        name="AccountSettings"
        component={AccountSettingsScreen}
        options={{ title: 'Account' }}
      />
    </Top.Navigator>
  );
};

export default SettingsTopTab;
